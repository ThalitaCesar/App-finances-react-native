import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Moviments({data}) {
    const [showValue, setShowValue] = useState(false);
 return (
    <TouchableOpacity style={styles.container} onPress={()=>setShowValue(!showValue)}>
   
    <Text style={styles.data}>{data.date}</Text>
    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (

        <Text style={data.type===1 ? styles.value: styles.expenses}>
            {data.type === 1 ? `R$ ${data.value}` :`R$ -${data.value}`}
        </Text>

        ): (
            <View style={styles.selekton}/>
        )
    }

    </View>
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom:24,
      borderBottomWidth:0.5,
      borderBottomColor:'#dadada',
      justifyContent:'space-between',
    },
    content:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:2,
        marginBottom:8,
    },
    date:{
        color:"#969CB3",
        fontWeight:'bold'
    },
    label:{
        fontWeight:'bold',
        fontSize:16,
        color: '#969CB3',
    },
    value:{
        fontWeight:'bold',
        fontSize:16,
        color:"#2ecc71"
    },
    expenses:{
        fontWeight:'bold',
        fontSize:16,
        color:"#e74c3c",
    },
    selekton:{
        marginTop:6,
        width:80,
        height:10,
        backgroundColor:'#dadada',
        borderRadius:8,
    }
  });