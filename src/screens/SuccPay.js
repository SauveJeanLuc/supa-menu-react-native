import { StyleSheet, Text, View, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import basketImage from '../assets/pay.png';
import { AntDesign } from '@expo/vector-icons';

const appOrange = '#ee8b07';

export default function SuccPay({navigation}) {
  // const {container,banner, highright, title, paragraph, button, buttonContainer, buttonLabel} = styles;
  const {container,imge,words,line,banner,title,paragraph,link, button, buttonContainer, buttonLabel} = styles;

  return (
    <View style={container}>

      <View style={banner}>
        <Image style={imge} source={basketImage}  />
      </View>

      <View style={words}>
        <Text style={title}>Payment Success, Yayy!</Text>
        <Text style={paragraph}>we will send order details and emvoice in your conatact no. and registered email</Text>
      </View>

      <View style={line}>
         <Text style={link}>Check Details</Text>
         <AntDesign name="arrowright" size={24} color="#ee8b07" style={styles.linkArrow}/>
       </View>
       
      <View style={buttonContainer}>
        <Pressable style={button}>
          <Text style={buttonLabel}>Download Invoice</Text>
        </Pressable>
      </View>

      <View onPress={()=>navigation.navigate("RateUs")} style={styles.footerLogo}>
        <Text style={[styles.footerLogoSupa, styles.footerLogoText]} >Supa</Text>
        <Text style={[styles.footerLogoMenu, styles.footerLogoText]} >Menu</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'column',
    flex: 1,
    // justifyContent:'space-between',
    // alignContent:'center',
  },

  banner: {
    flex: 1,
    padding:60,
    height: '40%',
    backgroundColor:'black',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  imge:{
    top:90,
    marginBottom:60,
    height:300,
    width:300,
  },

  title:{
    fontWeight:'bold',
    color:'#ee8b07',
    margin:5,
    fontSize:20,
    textAlign:'center'
  },
  paragraph:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    // backgroundColor:'black'
  },
  words:{
    top:70,
    flex: 1,
    alignItems:'center',
    textAlign:'center',
    width:450,
    height:5,
    marginLeft:15,
    // marginTop:37,
    padding:30,
    // backgroundColor:'blue'
  },
  link:{
    flex: 1,
    fontSize: 20,
    color:'#ee8b07',
    textAlign:'center',
    fontWeight:'700',
    marginLeft: 100,
  },
  linkArrow: {
    flex: 1,
    marginTop: 4,
    fontSize: 23,
  },
  line:{
    flex:1,
    top:3,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    // backgroundColor:'red'
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent:'space-around',
    alignItems:'center',
  },  
  button: {
    backgroundColor: '#ee8b07',
    width: 450,
    display: 'flex',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonLabel: {
    color: 'white',
    fontSize:20
  },
  footerLogo: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerLogoText:{
    fontSize: 47,
    fontWeight: '700'
  },
  footerLogoSupa: {
    color: 'white'
  },
  footerLogoMenu: {
    color: appOrange,
  }
})