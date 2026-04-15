import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, {useState} from "react"
import estilos from '../estilos/estilos.js' 

export default function Perfil(){
    return(
        <View /*style={estilos.viewGeral as ViewStyle}*/>
            <Text>Acesse seu perfil</Text>
            <TextInput placeholder="Digite seu nome"/>
            <TextInput placeholder="Digite sua senha" />
            <Button title="Enviar" onPress={() => alert("Mensagem enviada")} />
        </View>
    )
}

