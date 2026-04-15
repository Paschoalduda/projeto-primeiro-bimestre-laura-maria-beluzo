import { View, Text, TextInput, Button } from 'react-native'
import React, {useState} from "react"
import { StyleSheet } from 'react-native'
import estilos from '../estilos/estilos.js' 


export default function Cadastro(){
    return(
        <View>
            <Text>Cadastro de pratos</Text>
            <TextInput placeholder="Digite o nome do prato"/>
            <TextInput placeholder="Digite a descrição e ingredientes do prato" />
            <TextInput placeholder="Digite o preço do prato" /> 
            <Button title="Cadastrar" onPress={() => alert("Prato Salvo com sucesso!")} />
        </View>
    )
}