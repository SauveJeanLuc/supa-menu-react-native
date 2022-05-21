import React from "react";
import { Fontisto, FontAwesome } from "@expo/vector-icons";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacityBase,
  ScrollView,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function Search({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <FontAwesome name="search" size={20} color="#F7941D" />
        <TextInput
          placeholder="Search for your favorite restaurant"
          style={styles.textInput}
          onKeyPress={()=>navigation.navigate("SuccPay")}
        />
      </View>

      <View>
        <Text style={styles.or}>Or</Text>
        <View style={styles.qrcode}></View>
        <Text style={styles.scan}>Scan ,Pay & Enjoy </Text>
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7941D",
    height: "100%",
    width: "100%",
  },
  search: {
    marginTop: "30%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1.5,
    paddingLeft: 20,
    borderColor: "#fff",
    height: 45,
    borderRadius: 20,
    marginRight: "10%",
    marginLeft: 23,
    alignItems: "center",
  },
  textInput: {
    fontSize: 13,
    color: "black",
    marginTop: "2%",
    paddingLeft: 10,
  },

  or: {
    marginTop: "20%",
    fontSize: 18,
    color: "black",
    marginLeft: "40%",
    marginRight: "40%",
    fontWeight: "bold",
  },
  qrcode: {
    marginTop: "16%",
    marginLeft: 150,
    marginRight: 30,
  },
  scan: {
    marginTop: "18%",
    marginLeft: "30%",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
});
