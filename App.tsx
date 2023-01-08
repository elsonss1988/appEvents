import { View, Text } from "react-native";

export default function App() {
  return(
    <View style={{
      flex:1,
      backgroundColor:'#131016',
      padding: 24
      }}>
      <Text style={{
        color:'#FDFCFF',
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 48
        }}>Hello World</Text>
    </View>
  )
}
