import { Text, ImageBackground } from 'react-native'
import styles from '../style/style.js'

export default function Inicio(){
  return(
    <ImageBackground
      source={require('../../assets/images/principal.jpg')}
      style={{ width: '100%', flex: 1, height: '100%' }}
    >
    </ImageBackground>
  )
}