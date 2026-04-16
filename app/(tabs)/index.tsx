import { Text, Image, View } from 'react-native'
import styles from '../style/style.js'

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/principal.jpg')}
        style={styles.imagem}
      />
    </View>
  )
}