// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import { StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, Pressable, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

// import FontAwesomeIcon from "react-native-fontawesome";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

var AppOrangeColor = "#F7941D";
var AppIntensiveOrangeColor = "rgb(255, 128, 0)";

export default function ChooseRestaurantCheckout () {
    return(
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollview}>
            <FontAwesome5 name="less-than" style={styles.goBackIcon} />

            <View style={styles.headings}>
                <Text style={styles.headingOne}> Choose Kigali </Text>
                <Text style={styles.headingTwo}> Drinks </Text>
            </View>

            {/* //TODO: Turn this into a re-usable component */}

            <View style={styles.victuals}>
                <View style={styles.victualImage}>
                    <Image style={styles.tinyLogo} source={{ uri: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',}} />
                </View>
                <View style={styles.victualInfo}>
                    <Text style={styles.victualIngredients}> Kalfir Lime Vodka, Lemongrass, Ginger, Citrus </Text>
                    <Text style={styles.victualName}> Tom Yummy - 12.5 </Text>
                    <View style={styles.victualAmountAction}> 
                        <Text style={styles.victualPrice}> Frw 5000 </Text>
                        <View style={styles.victualAmountActionIcon}>
                            <Icon name="minus" style={styles.icon}/>
                                <Text style={styles.victualAmount}> 2 </Text>
                            <Icon name="plus" style={styles.icon}/>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.moreNavigator}>
                <Text style={styles.moreNavigatorText}>more drinks</Text>
                <AntDesign name="arrowright"  style={styles.moreNavigatorIcon}/>
            </View>

            <View style={styles.paycheck}>
                <Text style={styles.paycheckText}> Total </Text>
                <Text style={styles.paycheckTotal}> Frw 16,000 </Text>
            </View>            

            <Pressable style={styles.proceeder}>
                <Text style={styles.proceederButton}>Proceed To Checkout</Text>
            </Pressable>
            
            <View style={styles.navigationBar}>

            </View>

          </ScrollView>
      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({

    container:{
        marginTop: 30,
    },
    headings:{
        marginRight: 34,
    },
    goBackIcon: {
      fontSize: 17,
      color: AppOrangeColor,
      backgroundColor: "#f0f5fa",
      maxWidth: 40,
      paddingTop: 10,
      paddingLeft: 14,
      paddingRight: 14,
      paddingBottom: 10,
      flexDirection: 'row',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 4,
      marginLeft: 10,
      marginTop: 14,
    },
    scrollview: {
        backgroundColor: "white",
        height: (height * 90 / 100),
        width,
        padding: 10,
    },
    headingOne: {
        color: "#434445",
        fontWeight: "bold",
        fontSize: 26,
        textAlign: "right"
    },
    headingTwo: {
        color: AppOrangeColor,
        textAlign: "right",
        fontSize: 23,
        marginTop: 6,
    },
    victuals: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 14,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: "#f0f5fa",
        maxWidth: 400,
    },
    victualIngredients: {
        fontSize: 12.3,
        color: "grey",
    },
    icon: {
        fontSize: 14,
        color: AppOrangeColor,
    },
    tinyLogo: {
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    victualAmount: {
        fontSize: 17,
    },
    victualAmountAction: {
        flexDirection: 'row',
        flex: 1,
        marginTop:5,
    },
    victualPrice: {
        flex: 1,
        fontWeight: '900',
        color: AppIntensiveOrangeColor,
        fontSize: 18,
    },
    victualAmountActionIcon: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor:  "rgb(253, 253, 253)",
        borderRadius: 4,
        maxWidth: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    victualImage: {
        flex: 1,
        maxWidth: 60,
        marginTop: 3,
    },
    victualInfo: {
        marginLeft: 18,
        flex: 2,
        maxWidth: 350,
    },
    victualName: {
        fontWeight: 'bold',
    },
    moreNavigator: {
        flexDirection: 'row',
        flex: 1,
        color: AppOrangeColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 45,
        paddingBottom: 10,
    },
    moreNavigatorText: {
        color: AppIntensiveOrangeColor,
        fontWeight: '600',
        fontSize: 16,
    },
    moreNavigatorIcon: {
        color: AppIntensiveOrangeColor,
        fontWeight: '600',
        fontSize: 21,
        marginTop: 4,
        marginLeft: 12,
    },
    paycheck: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 20,
        paddingBottom: 30,
    },
    paycheckText: {
        flex: 2,
        fontWeight: '600',
        fontSize: 18,
    },
    paycheckTotal: {
        flex: 1,
        fontSize: 18,
        color: AppOrangeColor,
        fontWeight: '500',
    },
    proceeder: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 9,
        elevation: 3,
        backgroundColor: AppOrangeColor,
    },

    proceederButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})