import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const ParesImpares = () => {

  const numeros : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  let pares : number[] = [];
  let impares : number[] = [];
  const [vectorP,setVectorP] = useState<number[]>([0,0,0,0,0,0]);
  const [vectorI,setVectorI] = useState<number[]>([0,0,0,0,0,0]);

  const vector = () => {
    let j = 0;
    let k = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i]%2==0) {
        pares[j]=numeros[i];
        j++;
      }else{
        impares[k]=numeros[i];
        k++;
      }
    }
    setVectorP(pares);
    setVectorI(impares);
  }

  return (
    <View style={styles.container}>
         <Text style={styles.title}>BIENVENIDO</Text>
        <Text style={styles.title}>Vector: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14</Text>
        <TouchableOpacity style={styles.button} onPress={vector}>
          <Text style={styles.title}>CLASIFICAR</Text>
        </TouchableOpacity>
        <View style={styles.box}>
          <Text style={styles.box1}>Pares: {vectorP[0]},{vectorP[1]},{vectorP[2]},{vectorP[3]},{vectorP[4]},{vectorP[5]},{vectorP[6]}</Text>
          <Text style={styles.box2}>Impares: {vectorI[0]},{vectorI[1]},{vectorI[2]},{vectorI[3]},{vectorI[4]},{vectorI[5]},{vectorI[6]}</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#28c4d9',
      justifyContent:'space-evenly',
      alignItems:'center',
    },
    title:{
      fontSize:15,
      color:'black',
    },
    box:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    box1:{
      fontSize:15,
      color:'black',
    },
    box2:{
      fontSize:15,
      color:'black',
    },
    button:{
      color:'black',
      backgroundColor:'darkorange',
      padding:10,
    }
})