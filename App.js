import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Actions from './components/Actions';
import Balance from './components/Balance';
import Header from './components/Header';
import Moviments from './components/Moviments';


const list =[
  {id:1,
  label:'Boleto conta luz',
  value:'300,90',
  date: '22/09/2022',
  type:0 //despesas
},
{id:2,
  label:'Pix Cliente X',
  value:'2.350,00',
  date: '17/09/2022',
  type:1 //entradas
},
{id:3,
  label:'Salário',
  value:'7.200,00',
  date: '5/09/2022',
  type:1 //entradas
},
]

export default function App() {
  return (
    <View style={styles.container}>
    <Header name="Thalita César"/>
    <Balance saldo="9.250,90" gastos="390,00"/>

    <Text style={styles.title}>Últimas movimentações</Text>
    <FlatList 
    style={styles.list}
    data={list}
    keyExtrator={(item)=> String(item.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=><Moviments data={item}/>}
    />

<Actions/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5636D3',

  },
  title:{
    color: '#FFFFFF',
    fontSize:23,
    fontWeight:'bold',
    marginLeft:14,
    marginRight:14,
    marginTop:14,
    marginBottom:23,
  },
  list:{
    marginStart:14,
    marginEnd:14,
  }
});
