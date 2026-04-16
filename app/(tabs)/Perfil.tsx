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
            style={styles.button}
            title="Entrar"
            onPress={() => alert('Entrou no seu perfil ')}
        />
    </View>
  )
}