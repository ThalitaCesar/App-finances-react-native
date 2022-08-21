import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Balance({saldo, gastos}) {
 return (

    <View style={styles.container}>
  
    <TouchableOpacity style={styles.item} >
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.balance}>{saldo}</Text>
        </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currentSymbol}>R$</Text>
            <Text style={styles.expenses}>{gastos}</Text>
        </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:-84,
        zIndex:99,
        backgroundColor:'#fff',
        borderRadius:4,
        margin:16,
        width:400,
        heith:170,
        paddingStart:18,
        paddingEnd:18,
        marginStart:14,
        marginEnd:14,
        paddingTop:22,
        paddingBottom:22,
        justifyContent:'space-around',
    },
    item:{
    },
    itemTitle:{
        fontSize:20,
        color:'##dadada',
    },
    content:{
        flexDirection:'row',
        alignItem:'center',
    },
    currentSymbol:{
        color:"#dadada",
        marginRight:6,
    },
    balance:{
        fontSize:22,
        color:"#2ecc71"
    },
    expenses:{
        fontSize:22,
        color:"#e74c3c"
    }
    
  });
