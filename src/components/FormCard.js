import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
const FormCard = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <View
        style={{
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 36,
          }}
        >
          Supa
          <Text style={{ color: colors.primary }}>Menu</Text>
        </Text>
      </View>
      <View style={{ marginVertical: 25 }}>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#212C49",
          }}
        >
          Welcome ...
        </Text>
        <Text style={{ color: colors.secondary }}>
          Please fill in the information
        </Text>
      </View>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    top: "12%",
    justifyContent: "flex-end",
  },
});
export default FormCard;
