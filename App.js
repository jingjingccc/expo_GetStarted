import { StyleSheet, Text, View , Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import ImageViewers from "./components/ImageViewer.js";
import Button from "./components/button.js";

const PlaceholderImage = require('./assets/background_image.jpg');

export default function App(){
  // const [selectedImage, setSelectedImage] = useState(null);

  // const pickImageAsync = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     setSelectedImage(result.assets[0].uri);
  //   } else {
  //     alert('You did not select any image.');
  //   }
  // };
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, 
      quality: 1,
    });

    if (!result.canceled){ 
      setSelectedImage(result.assets[0].uri);
    } else{
      alert('you did not select any image.');
    }
  };
  
  return (
    <View style={styles.containers}>
      <View style={styles.imagecontainers}>
        <ImageViewers 
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Text style={{color: '#ffffff'}}></Text>
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
    
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
});