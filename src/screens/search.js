import React from "react";
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

function Search() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search for your favorite restaurant"
          style={styles.textInput}
        />
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
  },
  textInput: {
    paddingLeft: "15%",
    backgroundColor: "#fff",
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "#fff",
    height: 45,
    borderRadius: 20,
    marginLeft: "5%",
    marginRight: "5%",
    fontSize: 13,
    color: "black",
  },
});
