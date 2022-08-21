import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Actions() {
 return (
    <>
   <ScrollView style={styles.container}
   horizontal={true} showHorizontalScrollIndicator={false}>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="addfolder" size={24} color="#FF872C" />
        </View>
    <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="shoppingcart" size={24} color="#FF872C" />
        </View>
    <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="creditcard" size={24} color="#FF872C" />
        </View>
    <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="barcode" size={24} color="#FF872C" />
        </View>
    <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
        <AntDesign name="setting" size={24} color="#FF872C" />
        </View>
    <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>
   </ScrollView >
   </>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: -18,
        marginTop: 16,
        paddingEnd:0,
        paddingStart:0,
        marginStart:0,  
        marginEnd:-10,
        backgroundColor: '#5636D3',
        color: '#FF872C',
    },
    actionButton:{
    maxHeight: 80,
    width: 100,
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center',
    marginRight:2,
    marginLeft:2,
    },
    areaButton:{

    height:50,
    width:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
    },
    labelButton:{
    marginTop: 4,
    textAlign:'center',
    fontWight:'bold'
    }

  });