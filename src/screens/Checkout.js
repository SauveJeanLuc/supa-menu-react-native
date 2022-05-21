// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import { StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, Pressable, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5, AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import PaymentOption from '../components/PaymentOption';

// import FontAwesomeIcon from "react-native-fontawesome";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

var AppOrangeColor = "rgb(26, 221, 26)";
var AppIntensiveOrangeColor = "rgb(26, 221, 26)";

export default function Checkout () {

    return(
      <SafeAreaView style={styles.container}>

          <ScrollView style={styles.scrollview}>
            
            <View style={styles.header}>
                <View style={styles.headerMainBox}>
                    <FontAwesome5 name="less-than" style={styles.goBackIcon} />
                    <View style={styles.headerInfo}>
                        <View style={styles.headerInfoLeft}>
                            <Text style={styles.headerInfoText}>Checkout</Text>
                            <Image source={require("../assets/visa.png")} style={styles.headerInfoImage}/>
                        </View>
                        <View style={styles.headerInfoRight}>
                            <Text style={styles.headerInfoAmount}>Frw 16,000</Text>
                            <Text style={styles.headerInfoVat}>Including VAT(18%)</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.paymentOption}>
                    <Text style={styles.paymentOptionCredit} >Credit card</Text>
                    <Text style={styles.paymentOptionCash} >Mobile & Cash</Text>
                </View>
            </View>

            <View style={styles.paymentBox}>
                <PaymentOption name={'MTN Mobile mone'} uri={'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}/>
                <PaymentOption name={'MTN Mobile mone'} uri={'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}/>
            </View>
              

          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText} >We will send you an order details to your email  after the successfull payment</Text>
            <Pressable style={styles.proceeder}>
                    <MaterialIcons name="lock" size={24} color="white"  style={styles.proceederIcon}/>
                    <Text style={styles.proceederButton}>Pay The Order</Text>
            </Pressable>
          </View>

      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({

    container:{
    },

    scrollview: {
        marginTop: 30,
        backgroundColor: "rgb(250, 250, 250)",
        height: (height * 90 / 100),
        width,
        padding: 10,
    },

    footer:{

    },

    footerText:{
        color:  'grey',
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10,
        maxWidth: 300,
        marginLeft: 47,
        marginRight: 30,
        textAlign: 'center'
    },

    header: {

        // alignItems: 'center',
        // justifyContent: 'center',


    },

    headerMainBox: {
        paddingVertical: 12,
        paddingHorizontal: 22,
        borderRadius: 20,
        marginRight: 20,
        marginBottom: 30,
        paddingBottom: 80,
        backgroundColor: 'white',
        shadowColor: "rgb(116, 244, 116)",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },

    goBackIcon: {
      fontSize: 17,
      color: AppOrangeColor,
      backgroundColor: "#f0f5fa",
      maxWidth: 40,
      paddingTop: 9,
      paddingLeft: 14,
      paddingRight: 14,
      paddingBottom: 10,
      borderRadius: 4,
      marginRight: 100,
      marginBottom: 18
    },


    proceeder: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 9,
        elevation: 3,
        backgroundColor: AppOrangeColor,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    },

    proceederIcon: {
        flex: 1,
        marginLeft: 60,
    },

    proceederButton: {
        flex: 5,
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    headerInfo: {
        flexDirection: 'row',
    },

    headerInfoLeft: {
        flex:3,
        flexDirection: 'row',
        marginTop: 7,
    },

    headerInfoRight:{
        flex: 2,
    },

    headerInfoAmount: {
        fontSize: 16.4,
        fontWeight: '700',
        color: AppOrangeColor,
    },

    headerInfoText: {
        fontWeight: '600',
        fontSize: 18,
    },

    headerInfoVat: {
        color:  'grey',
        fontSize: 13,
    },

    headerInfoImage: {
        width: 22,
        height: 13,
        marginLeft: 4,
        marginTop: 6,
    },

    paymentOption: {
        position: 'absolute',
        bottom: 0,
        left:6, 
        width: 340,
        flexDirection: 'row',
        // paddingBottom: 30,
        // paddingTop: 30,
        // marginTop: 23,
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        borderRadius: 9,
        elevation: 3,
        backgroundColor: AppOrangeColor,
        marginBottom: 3,
    },


    paymentOptionCash:{
        flex: 1,
        paddingBottom: 10,
        paddingTop: 30,
        paddingVertical: 2,
        paddingHorizontal: 32,
        height: 80,
        borderRadius: 9,
        backgroundColor: AppOrangeColor,
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    paymentOptionCredit: {
        flex: 1,
        height: 80,
        paddingBottom: 10,
        paddingTop: 30,
        paddingVertical: 2,
        paddingHorizontal: 32,
        borderRadius: 9,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '600',
        fontSize: 16,
    },

    paymentBox: {
        marginTop: 50,
    },

    payment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,

    },

    paymentImage: {
        flex: 1,
        width: 10,
        height: 80,
        marginLeft: 4,
        marginTop: 6,
    },

    paymentText: {
        flex: 2.4,
        fontSize: 19,
        color: 'grey',
        marginLeft: 30,
    }
})