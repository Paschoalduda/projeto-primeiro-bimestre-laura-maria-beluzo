import { Tabs } from 'expo-router'

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Inicio'}} />
            <Tabs.Screen name="Perfil" options={{ title: 'Perfil'}} />
            <Tabs.Screen name="Cadastro" options={{ title: 'Cadastro'}} />
            <Tabs.Screen name="Lista" options={{ title: 'Lista'}} />
        </Tabs>
        )
}