import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Button({ label, theme, onPress }) {
    if (theme === "primary") 
    {
      return (
        <View style={[styles.buttonContainer, { borderWidth: 10, borderColor: "#fff", borderRadius: 10 }]}>
          <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={onPress}
          >
            <FontAwesome
              name="heart"
              size={18}
              color="#dbd942"
              style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
          </Pressable>
      </View>
      );
    }
  
    return (
      <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
  },
});
