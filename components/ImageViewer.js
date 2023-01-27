import { StyleSheet, Image } from "react-native";

// display the original image given by the param placeholderImageSource
// export default function ImageViewers({placeholderImageSource})
// {
//     return(
//         <Image source={placeholderImageSource} style={styles.image}/>    
//     );
// }

// this is for replace the original image function
export default function ImageViewers({placeholderImageSource, selectedImage}){
    const imageSource = selectedImage !== null ? {uri:selectedImage}:placeholderImageSource;
    
    // if the statement "selectedImage !== null" is :
    // true : imageSource = {uri:selectedImage}
    // false : imageSource = placeholderImageSource

    return <Image source={imageSource} style={styles.image}/>;
}

const styles = StyleSheet.create({
    image: {
        width: 320, 
        height: 320, 
        borderRadius: 18,
    },
});
