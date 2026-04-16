import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
        marginTop: 30,
        padding: 10
    },

    card: {
        backgroundColor: '#ddd',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10
    },
    
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 5
    },

    descricao: {
        fontSize: 18,
        color: 'black'

    },

    imagem: {
    width: '100%',
    aspectRatio: 1,
    height: 400,
    resizeMode: 'contain',
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#ddd'
    },

    button:{
        backgroundColor: '#da4242ff',
        padding: 12,
        borderRadius: 8
    }

})