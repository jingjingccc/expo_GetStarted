import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function IconButton({icon, label, onPress}){
    return(
        <Pressable style={StyleSheet.IconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={StyleSheet.IconButtonLabal}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    IconButton:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    IconButtonLabal:{
        color: '#fff',
        marginTop: 12,
    },
});