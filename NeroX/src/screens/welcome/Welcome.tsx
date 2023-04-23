import { View, Text, Dimensions} from 'react-native'
import React, {ReactNode} from 'react'
import { Container, ScreenWidth } from '../../components/general/general';
import { Image } from 'react-native/Libraries/Image/Image';
import { ImageBackground } from 'react-native/Libraries/Image/Image';




const {height} = Dimensions.get("window");



export default function Welcome() {
  return (
    
    <Container bgColor='bg-sage'>
      <Image source={require('../../images/logo.png')}/>
    </Container>
    
  )
}