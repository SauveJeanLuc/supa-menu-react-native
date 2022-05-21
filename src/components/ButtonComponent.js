import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
const ButtonComponent = ({ text, background }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: background }]}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    paddingHorizontal: 140,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    fontSize: 42,
    borderRadius: 8,
  },
});
