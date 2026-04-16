import { ScrollView, View, Text, Image } from 'react-native'
import { useState } from 'react'
import styles from '../style/style.js'

export default function Lista(){
    const [prato1] = useState({
        nome: "Strogonoff de Frango",
        descricao: "Arroz, strogonoff de frango e batata palha",
        imagem: "https://casa.abril.com.br/wp-content/uploads/2022/08/Receita-de-strogonoff-de-carne-ou-frango-02.jpeg?quality=70&strip=info&w=1024&crop=1"
    })

    const [prato2] = useState({
        nome: "Macarronada",
        descricao: "Macarrão com molho a bolonhesa",
        imagem: "https://www.evino.com.br/blog/wp-content/uploads/2022/08/macarronada-a-bolonhesa-scaled.jpg"
    })

    const [prato3] = useState({
        nome: "Lasanha de quatro queijos",
        descricao: "Lasanha com queijos e molho branco ",
        imagem: "https://renata.com.br/images/receitas/180/renata-imagem-receitas-lasanha-4-queijos-share.jpg"
    })

    const [prato4] = useState({
        nome: "Batata com Cheddar e Bacon",
        descricao: "Batata frita com queijo cheddar e bacon",
        imagem: "https://recipe-cookbook.com/wp-content/uploads/2024/10/Batata-Frita-na-Airfryer-com-Cheddar-e-Bacon-Recipe-CookBook.com_-1024x700.jpg"
    })

    const [prato5] = useState({
        nome: "Pizza de Brócolis",
        descricao: "Pizza de brócolis com bacon e queijo",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/e30c8c804046c329d340050de9bd69a0_XL.jpg"
    })

    const [prato6] = useState({
        nome:"Panqueca de Carne Moída",
        descricao: "Panqueca recheada com carne moída e molho de tomate",
        imagem: "https://sabores-new.s3.amazonaws.com/public/2024/11/panquecas-de-carne-moida-1024x494.jpg"
    })

    const [prato7] = useState({
        nome:"Salmão Grelhado",
        descricao: "Salmão grelhado com legumes e arroz",
        imagem: "https://www.dicasedicas.com.br/_next/image?url=https%3A%2F%2Fd135llbe2j366l.cloudfront.net%2Fcompressed%2Fsalmao-grelhado-com-molho-de-alecrim-e-risoto-cremoso-google.webp&w=828&q=50"
    })

    const [prato8] = useState({
        nome: "Hamburguer Artesanal ",
        descricao: "Hamburguer artesanal com carne bovina,queijo, tomate, alface, cebola e molho especial",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoUhMnPmRh4ILmy00z6avGA5amn6L_eCCRg&s"
    })

    const [prato9] = useState({
        nome: "Risoto de Camarão",
        descricao: "Risoto cremoso com camarões e queijo parmesão",
        imagem: "https://s2-receitas.glbimg.com/KWpGf7SHzNbPSab_Z3fmhDOGCmo=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/A/5/RQBWn4SlyzO0JWxYflwg/capa-materia-gshow-102-.png"
    })

    const [prato10] = useState({
        nome: "Pizza de Calabresa",
        descricao: "Pizza de calabresa com queijo e orégano",
        imagem: "https://www.galbani.com.br/wp-content/uploads/2025/11/Pizza-calabresa_-respondemos-5-duvidas-mais-comuns-sobre-a-receita-.jpg"
    })
  return(

    <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Cardápio do Restaurante</Text>

        <View style={styles.card}>
            <Image source={{ uri: prato1.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato1.nome}</Text>
            <Text style={styles.descricao}>{prato1.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato2.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato2.nome}</Text>
            <Text style={styles.descricao}>{prato2.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato3.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato3.nome}</Text>
            <Text style={styles.descricao}>{prato3.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato4.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato4.nome}</Text>
            <Text style={styles.descricao}>{prato4.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato5.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato5.nome}</Text>
            <Text style={styles.descricao}>{prato5.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato6.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato6.nome}</Text>
            <Text style={styles.descricao}>{prato6.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato7.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato7.nome}</Text>
            <Text style={styles.descricao}>{prato7.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato8.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato8.nome}</Text>
            <Text style={styles.descricao}>{prato8.descricao}</Text>
        </View>

        <View style={styles.card}>
            <Image source={{ uri: prato9.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato9.nome}</Text>
            <Text style={styles.descricao}>{prato9.descricao}</Text>
        </View> 

        <View style={styles.card}>
            <Image source={{ uri: prato10.imagem }} style={styles.imagem} />
            <Text style={styles.titulo}>{prato10.nome}</Text>
            <Text style={styles.descricao}>{prato10.descricao}</Text>
        </View>
        
    </ScrollView>
  )
}