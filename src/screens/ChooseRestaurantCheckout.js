// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import { StyleSheet, Text, SafeAreaView, Dimensions, ScrollView } from 'react-native';

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

export default function ChooseRestaurantCheckout () {
    return(
      <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollview}>
            <Text style={styles.headingOne}> Choose Kigali </Text>
            <Text style={styles.headingTwo}> Drinks </Text>
          </ScrollView>
      </SafeAreaView>  
    );
}

const styles = StyleSheet.create({
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
        color: "#F7941D",
        textAlign: "right",
        fontSize: 27,
        marginTop: 10,
    }
})