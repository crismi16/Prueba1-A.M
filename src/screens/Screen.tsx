import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Screen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#28c4d9',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    boxPurple:{
      width:100,
      height:100,
      backgroundColor:'purple',
      borderWidth:5,
      borderColor:'white',
    },
    boxOrange:{
      width:100,
      height:100,
      backgroundColor:'darkorange',
      borderWidth:5,
      borderColor:'white',
      top:50,
    },
    boxGreen:{
      width:100,
      height:100,
      backgroundColor:'green',
      borderWidth:5,
      borderColor:'white',
    },
  })