import { View, Text, ScrollView, StyleSheet} from 'react-native'
import estilos from '../estilos/estilos.js'

export default function Lista (){ 
    return(
        <View>
            <Text>Este é nosso cardápio</Text>

            <ScrollView>
                <Text>Nome:</Text>
                <Text>Descrição e ingredientes:</Text>
                <Text>Preço:</Text>
            </ScrollView>
            </View>
        )
    }
    