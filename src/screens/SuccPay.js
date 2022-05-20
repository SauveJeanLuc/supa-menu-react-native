import { StyleSheet, Text, View, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import basketImage from '../assets/pay.png';
import { AntDesign } from '@expo/vector-icons';

export default function SuccPay({navigation}) {
  // const {container,banner, highright, title, paragraph, button, buttonContainer, buttonLabel} = styles;
  const {container,imge,words,line,banner,title,paragraph,link, button, buttonContainer, buttonLabel} = styles;
  return (
    <View style={container}>
       <View style={banner}>
          <Image style={imge} source={basketImage}  />
       </View>
      <View>
      <View style={words}>
        <Text style={title}>Payment Success</Text>
        <Text style={paragraph}>we will send order details and emvoice in your conatact no. and registered email</Text>
       </View>
       <View style={line}>
         <Text style={link}>Check Details 
         <AntDesign name="arrowright" size={24} color="#ee8b07" /></Text>
       </View>
      </View>
       
       <View style={buttonContainer}>
       <Pressable style={button}>
         <Text style={buttonLabel}>Download Invoice</Text>
       </Pressable>
       </View>
       <View>
        <Text style={paragraph} onPress={()=>navigation.navigate("RateUs")}>SupaMenu</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    // justifyContent:'space-between',
    // alignContent:'center',
  },
  banner: {
    padding:60,
    height: '40%',
    backgroundColor:'black',
    justifyContent: 'space-around',
    alignItems: 'center'
 },
  imge:{
    marginTop:60,
    height:300,
    width:300,
  },
  title:{
    fontWeight:'bold',
    color:'#ee8b07',
    margin:5,
    fontSize:16
  },
  paragraph:{
    color:'white',
    fontSize:16
  },
  words:{
    alignItems:'center',
    justifyContent:'space-around',
    textAlign:'center',
    width:400,
    marginLeft:65,
    padding:30
  },
  link:{
    padding:30,
    color:'#ee8b07',
    textAlign:'center',
    fontWeight:'700',
  },
  line:{
    flexDirection:'row',
  },
  buttonContainer: {
    width: '100%',
    justifyContent:'space-around',
    alignItems:'center'
  },  
  button: {
    backgroundColor: '#FFA451',
    width: 250,
    display: 'flex',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonLabel: {
    color: 'white'
  }
})