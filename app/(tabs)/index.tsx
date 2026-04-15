import { View, Text, StyleSheet, Image } from 'react-native'
import { Tabs } from 'expo-router'
import estilos from '../estilos/estilos.js'

export default function Home(){
    return(
        <View>
            <Image source={require('../../assets/images/principal.jpg')} />
        </View>
            
    )
}
    
export const styles = StyleSheet.create({
  caixa:{
    backgroundColor:'red',
    padding:20
  },
  viewGeral:{
    padding:20
  }
})

