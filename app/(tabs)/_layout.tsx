import { Tabs } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Inicial'}} />
            <Tabs.Screen name="Cadastro" options={{ title: 'Cadastro'}} />
            <Tabs.Screen name="Lista" options={{ title: 'Lista'}} />
            <Tabs.Screen name="Perfil" options={{ title: 'Perfil'}} />
        </Tabs>
        )
}
