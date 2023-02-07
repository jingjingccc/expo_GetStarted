// dependencies
import { StyleSheet, Text, View , Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import {captureRef} from 'react-native-view-shot';

// component
import ImageViewers from "./components/ImageViewer.js";
import Button from "./components/button.js";
import CircleButton from "./components/CircleButton.js";
import IconButton from "./components/iconBotton.js";
import EmojiPicker from "./components/EmojiPicker.js";
import EmojiList from "./components/EmojiList.js";
import EmojiSticker from "./components/EmojiSticker.js";

const PlaceholderImage = require('./assets/background_image.jpg');

export default function App(){
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const imageRef = useRef();

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, 
      quality: 1,
    });

    if (!result.canceled)
    { 
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } 
    else
    {
      alert('you did not select any image.');
    }
  };
  
  const onReset = () => {
    setShowAppOptions(false);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onSaveImageAsync = async() => {
    try{
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });
      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri)
      {
        alert("Saved!!");
      }
    }
    catch(e)
    {
      console.log(e);
    }
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  if (status == null){
    requestPermission();
  }

  return (
    <GestureHandlerRootView style={styles.containers}>
      <View style={styles.imagecontainers}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewers 
            placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
            {pickedEmoji !== null? <EmojiSticker imageSize={60} stickerSource={pickedEmoji}/> : null}
        </View>
      </View>
      {showAppOptions?
        (<View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>)
        :(<View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Text style={{color: '#ffffff'}}></Text>
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )
      }
      <EmojiPicker isVisiable={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView >
    
  );  
}

const styles = StyleSheet.create({
  containers:{
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imagecontainers:{
    flex: 1,
    alignItems: "center",
    paddingTop: 90,
    justifyContent: "center",
  },
  image:{
    width: 320, 
    height: 440,
    borderRadius: 18,
  },
  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow:{
    alignItems: 'center',
    flexDirection: 'row'
  },
});