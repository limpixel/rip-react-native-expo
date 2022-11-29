import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
 
const BelajarImage = () => {
  return (
    <View style={style.container}>
      <ImageBackground style={style.background} resizeMode='cover' source={{ uri : 'https://i.pinimg.com/736x/5e/2b/f8/5e2bf8b61e3518bfd6934ccd287b4d4e.jpg'}}>
      <Image
        style={[style.img, style.mt30]} 
        resizeMode={'contain'}
        source={require('../asset/img/wp.jpeg')}
      />
       <Image
        style={[style.img, style.mt20]} 
        resizeMode={'contain'}
        source={{ uri : 'https://i.pinimg.com/736x/ab/a6/1b/aba61b0b4984424dc1e02bdaf1fea66c.jpg'}}
        
      />
       <Image
        style={[style.img, style.mt20]} 
        resizeMode={'contain'}
        source={{ uri : 'https://i.ytimg.com/vi/iM3kjbbKHQU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3lvZKNNg645ZsiNAiCT6bccSCbA'}}
      />
      </ImageBackground>
    </View>
  )
}


const style = StyleSheet.create({
    container : {
        flex : 1,
        
    },
    background : {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems  : 'center',
    },
    img : {
        width: 350, 
        height: 190,
        borderRadius: 15,
    },
    mt10 : {
        marginTop: 10,
    },
    mt20 : {
        marginTop : 20,
    },
    mt30 : {
        marginTop :30,
    },
});
export default BelajarImage