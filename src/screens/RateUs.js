import { StyleSheet, Text, View } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

export default function RateUs() {
  // const {container,banner, highright, title, paragraph, button, buttonContainer, buttonLabel} = styles;
  const {container,line,words,title} = styles;
  return (
    <View style={container}>
       
      <View style={words}>
        <Text style={title}>Yayy!
         We value all feedback,please rate your experience below:</Text>
        
        <View style={line}>
          <Entypo name="star" size={54} color="#ee8b07" />
          <Entypo name="star" size={54} color="#ee8b07" />
          <Entypo name="star" size={54} color="#ee8b07" />
          <Entypo name="star" size={54} color="white" />
          <Entypo name="star" size={54} color="white" />
        </View>

        <Text style={title}>Thank you for helping us improve our service!</Text>
      </View>
      
      <View  style={styles.footerLogo}>
        <Text style={[styles.footerLogoSupa, styles.footerLogoText]} >Supa</Text>
        <Text style={[styles.footerLogoMenu, styles.footerLogoText]} >Menu</Text>
      </View>     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent:'space-evenly',
    padding:50
  },
  title:{
    fontWeight:'700',
    color:'#ee8b07',
    marginTop:45,
    marginBottom:35,
    fontSize:26,
    textAlign:'center'
  },
  words:{
    width:450,
    padding:30,
    // marginBottom:30,
    justifyContent:"space-evenly"
  },
  line:{
    marginTop:45,
    marginBottom:45,
      flexDirection:'row',
      marginHorizontal:50
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
    color: '#ee8b07'
  }
})