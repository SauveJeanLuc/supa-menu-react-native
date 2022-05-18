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
} from "react-native";

function Login() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginHeader}>Welcome...</Text>
        <Text style={styles.loginmsg}>Sign in to continue</Text>
        <View style={styles.form}>
          <TextInput placeholder="Your Email" style={styles.textInput} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.LoginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "#ffffff",
    margin: 10,
  },
  loginHeader: {
    textAlign: "center",
    fontSize: 19,
    marginTop: 90,
    color: "black",
    fontWeight: "bold",
  },
  loginmsg: {
    textAlign: "center",
    fontSize: 13,
    color: "grey",
  },
  form: {
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5,
  },
  textInput: {
    flexDirection: "row",
    borderWidth: 1.9,
    borderColor: "#e1e1e1",
    height: 45,
    borderRadius: 3,
    margin: 10,
    padding: 10,
    width: 350,
    fontSize: 13,
  },
  LoginButton: {
    backgroundColor: "gold",
    width: 350,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    height: 50,
    borderRadius: 3,
  },
  loginText: {
    textAlign: "center",
    padding: 12,
    fontSize: 18,
    color: "#ffffff",
  },
});
