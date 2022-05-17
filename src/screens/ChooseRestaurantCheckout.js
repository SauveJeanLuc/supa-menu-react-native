// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import { StyleSheet, Text, SafeAreaView, Dimensions, ScrollView, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

var AppOrangeColor = "#F7941D";

export default function ChooseRestaurantCheckout () {
    return(
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollview}>
            <Text style={styles.headingOne}> Choose Kigali </Text>
            <Text style={styles.headingTwo}> Drinks </Text>

            {/* //TODO: Turn this into a re-usable component */}

            <View style={styles.victuals}>
                <Text style={styles.victualIngredients}> Kalfir Lime Vodka, Lemongrass, Ginger, Citrus </Text>
                <Text style={styles.victualName}> Tom Yummy - 12.5 </Text>
                <Text style={styles.victualPrice}> 5000 Frw </Text>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}} />
                <View style={styles.victualAmountAction}> 
                    <Icon name="minus" style={styles.icon}/>
                        <Text style={styles.victualAmount}> 2 </Text>
                    <Icon name="plus" style={styles.icon}/>
                </View>
            </View>

          </ScrollView>
      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
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
        fontSize: 27,
        marginTop: 10,
    },
    victuals: {
        color: "black",
    },
    icon: {
        fontSize: 20,
        color: AppOrangeColor,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})