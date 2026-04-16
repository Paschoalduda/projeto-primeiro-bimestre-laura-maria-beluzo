import { View, Text, TextInput, Button } from 'react-native'
import styles from '../style/style.js'

export default function Perfil(){
  return(
    <View style={styles.container}>
        
        <Text style={styles.titulo}>
            Perfil do Usuário
        </Text>
      
        <TextInput
        style={styles.input}
        placeholder="Nome"
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        />

        <Button
        title="Entrar"
        color="#6f0000"
        onPress={() => alert('Entrou no seu perfil!')}
      />
    </View>
  )
}