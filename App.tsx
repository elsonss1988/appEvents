import { View, Text,StyleSheet } from "react-native";

export default function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#131016',
    padding: 24
  },
  eventName:{
    color:'#FDFCFF',
    fontSize: 24,
    fontWeight:'bold',
    marginTop: 48
  }

})
