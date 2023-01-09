import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {styles} from './styles'
import {Participant} from '../Participant'

export function Home() {

function handleParticipantAdd() {
  console.log("Participante adicionado");
}

function handleParticipantRemove(){
  console.log('Remove')
}

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View  style={styles.forms}>
        <TextInput style={styles.input} 
        placeholder="Nome do Participante"
        placeholderTextColor="#6B6B6B"
        keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} 
        onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name="Elson." onRemove={handleParticipantRemove}/>
      <Participant name="Elder." onRemove={handleParticipantRemove}/>
      <Participant name="Elaine." onRemove={handleParticipantRemove}/>
      <Participant name="Elias." onRemove={handleParticipantRemove}/>
    </View>
  )
}