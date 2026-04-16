import { View, Text, TextInput, Button } from 'react-native'
import styles from '../style/style.js'

export default function Cadastro(){
  return(
    <View style={styles.container}>
        
        <Text style={styles.titulo}>
            Cadastro de Produto
        </Text>
      
        <TextInput
        style={styles.input}
        placeholder="Nome do Prato"
        />

        <TextInput
        style={styles.input}
        placeholder="Descrição"
        />

        <TextInput
        style={styles.input}
        placeholder="Preço"
        />

        <Button
        style={styles.button}
        title="Cadastrar no cardápio"
        onPress={() => alert('Produto cadastrado com sucesso!')}
        />
    </View>
  )
}