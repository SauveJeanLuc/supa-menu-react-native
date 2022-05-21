import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RateUs() {
  // const {container,banner, highright, title, paragraph, button, buttonContainer, buttonLabel} = styles;
  const {container,line,words,title} = styles;
  return (
    <View style={container}>
       
      <View style={words}>
        <Text style={title}>Yayy! We value all feedback,please rate your experience below:</Text>
        <Text style={title}>Thank you for helping us improve our service!</Text>
      </View>
      <View style={line}>
      <AntDesign name="star" size={24} color="#ee8b07" />
      <AntDesign name="star" size={24} color="#ee8b07" />
      <AntDesign name="star" size={24} color="#ee8b07" />
      <AntDesign name="staro" size={24} color="#ee8b07" />
      <AntDesign name="staro" size={24} color="#ee8b07" />
      </View>
      <View>
        <Text style={title}>SUPA MENU</Text>
      </View>     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  title:{

    fontWeight:'bold',
    color:'#ee8b07',
    margin:5,
    fontSize:16,
    textAlign:'center'
  },
  words:{
    width:250,
    marginLeft:135,
    padding:30
  },
  line:{
      flexDirection:'row',
  }
})