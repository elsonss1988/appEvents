import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert, Button } from "react-native";
import {styles} from './styles'
import {Participant} from '../Participant'
import { useState } from "react";

export function Home() {
//const participants = ['Pedrita','Cecilia','Maria','Elaine','Elisandra','Elisangela','Teresa', 'Talita','Carla','Renata'];
//const participants = ['Peter', 'Jonh',]
const [participant,setParticipant] = useState<string[]>([])
const [participantName, setParticipantName] = useState('')

function handleParticipantAdd() {
  if(participant.includes(participantName)){
    return Alert.alert(`Já existe um participante chamado ${participantName}`)
  }
  setParticipant(prevState => [...prevState,participantName])
  setParticipantName('');
  // console.log(participant);
}

function handleParticipantRemove(name:String){

  setParticipant(prevState => prevState.filter(participant => participant !== name))
  // console.log(participant.filter(participant => participant !== name))
  Alert.alert(
    "Remover",
    `Deseja remover ${name} ?`,
    [
      {
        text: 'sim',
        onPress:()=> Alert.alert(`Deletando ${name}!`)
      },
      {
        text: 'não',
        style:'cancel'
      }

    ]
  )
  console.log(`Removendo ${name}`)
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
        onChangeText={text => setParticipantName(text)}
        value={participantName}
        />
        <TouchableOpacity style={styles.button} 
        onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participant}
        keyExtractor={item=>item}
        renderItem={({item})=>(
          <Participant key={item} name={item} onRemove={()=>handleParticipantRemove(item)}/>

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=><Text>
          Nenhum participante adicionado
        </Text>}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participant.map(p =>(
          <Participant key={p} name={p} onRemove={()=>handleParticipantRemove(p)}/>
        ))
      }
      </ScrollView>
      <Button title="send"/>
    </View>
  )
}