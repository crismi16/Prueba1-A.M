import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
    title:string;
    position?:'bl'|'br';
    onPress:()=>void;
}

export const Estilo = ({title,onPress,position='bl'}:Props) => {
    // console.log(props.title);
  return (
    <TouchableOpacity
        style={[styles.fabLocation,
            (position=='bl')
            ?styles.BL
            :styles.BR
        ]}
        onPress={onPress}>
        <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    fab:{
        backgroundColor:'darkorange',
        // borderRadius:100,
        // width:70,
        // height:70,
        justifyContent:'center'
    },
    fabText:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    fabLocation:{
        position:'absolute',
    },
    BL:{
        left:10
    },
    BR:{
        right:10
    }
})