import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22:64;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF872C",
    paddingTop: 16 ,
    flexDirection:'row',
    paddingStart:16,
    paddingEnd:16,
    paddingBottom:44,
    height:278,
  },
  content:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    paddingEnd:16,
    justifyContent:'space-between',
  },
  texts:{
    flex:1,
    flexDirection:'column',
  },
  username:{
    fontSize: 18,
    color:"#FFF",
    fontWeight:'bold',
  },
  hello:{
    fontSize: 18,
    color:"#FFF",
  },
  buttonUser:{
    width:44,
    height:44,
    backgroundColor:'rgba(255,255,255,0.5)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    margin:16,

  }
});

const Header = ({name}) => (
    <View style={styles.container}>
     <View style={styles.content} >

     <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
        <Feather name="user" size={27} color="fff"/>
    </TouchableOpacity>

        <View style={styles.texts}>
            <Text
            style={styles.hello}>Olá,</Text>
            <Text
            style={styles.username}>{name}</Text>
         </View>

    <TouchableOpacity activeOpacity={0.9}>
        <AntDesign name="logout" size={24} color="#12A454" />
    </TouchableOpacity>

     </View>
    </View>
  );



export default Header