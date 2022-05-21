import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { 
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ButtonComponent from "../components/ButtonComponent";
import FormCard from "../components/FormCard";
import colors from "../config/colors";
export default function RegisterScreen({ navigation }) {
  const [name, setName] = React.useState("Your Name");
  const [number, setNumber] = React.useState("Phone Number");
  const [email, setEmail] = React.useState("Your Email");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.form}
    >
      <FormCard style={styles.card}>
        <View style={styles.inputContainer}>
          <Octicons name="person" size={24} color={colors.secondary} />
          <TextInput
            value={name}
            style={styles.inputStyle}
            onChangeText={(val) => setName(val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign name="phone" size={24} color={colors.secondary} />
          <TextInput
            value={number}
            style={styles.inputStyle}
            keyboardType="numeric"
            onChangeText={(val) => setNumber(val)}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color={colors.secondary}
          />
          <TextInput
            value={email}
            style={styles.inputStyle}
            keyboardType="email-address"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <ButtonComponent text="Proceed" background="#F6941C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 5,
            width: "90%",
          }}
        >
          <View style={styles.divider} />
          <View>
            <Text
              style={{
                color: "#9099B0",
                fontWeight: "bold",
                width: 70,
                textAlign: "center",
              }}
            >
              OR
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
        <Text
          style={{
            color: colors.secondary,
            textAlign: "center",
            padding: 5,
          }}
        >
          If you have a PMG account
        </Text>
        <View style={{ marginVertical: 10 }}>
          <ButtonComponent text="Sign in" background="#F6941C" />
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 5,
          }}
        >
          <Text style={{ color: colors.secondary }}>
            Do you Have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: colors.primary }}
            >
              Login
            </Text>
          </Text>
        </View>
      </FormCard>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.background,
  },
  card: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.secondary,
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 3,
    paddingVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.borderColor,
    margin: 10,
    color: colors.secondary,
    paddingHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 25,
    color: colors.secondary,
  },
});
