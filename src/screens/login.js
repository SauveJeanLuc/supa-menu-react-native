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

function Login({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
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

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <View style={styles.LoginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.or}>
          <View style={styles.orLineLef} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLineRight} />
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.loginGoogle}>
              <Text style={styles.loginWithText}>Login with google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.loginFb}>
              <Text style={styles.loginWithText}>Login with facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.forget}>
          <Text style={styles.forgetPassword}>Forgot Password?</Text>
          <View style={styles.Account}>
            <Text style={styles.noAccount}>Don't have an account?</Text>
            <Text style={styles.register}>Register</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#F7941D",
  },

  container: {
    marginTop: "20%",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    margin: 3,
    padding: 10,
    marginLeft: 17,
    marginRight: 40,
    fontSize: 13,
    color: "black",
  },
  LoginButton: {
    backgroundColor: "#F7941D",
    // width: 360,
    marginLeft: 20,
    marginRight: 40,
    marginTop: 10,
    height: 50,
    borderRadius: 3,
  },
  loginText: {
    textAlign: "center",
    padding: 12,
    fontSize: 15,
    color: "#ffffff",
  },

  or: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 40,
  },

  orLineLef: {
    backgroundColor: "grey",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  orText: {
    alignSelf: "center",
    paddingHorizontal: 10,
    fontSize: 13,
  },

  orLineRight: {
    backgroundColor: "grey",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },

  loginGoogle: {
    borderWidth: 2,
    borderColor: "#e1e1e1",
    backgroundColor: "#ffffff",
    marginLeft: 20,
    marginRight: 40,
    marginTop: 10,
    height: 50,
    borderRadius: 3,
  },
  loginFb: {
    borderWidth: 1.9,
    borderColor: "#e1e1e1",
    backgroundColor: "#ffffff",
    // width: 360,
    marginLeft: 20,
    marginRight: 40,
    marginTop: 10,
    height: 50,
    borderRadius: 3,
  },
  loginWithText: {
    textAlign: "center",
    padding: 12,
    fontSize: 15,
    color: "grey",
    fontWeight: "bold",
  },

  forget: {
    marginTop: 10,
  },
  forgetPassword: {
    textAlign: "center",
    color: "#F7941D",
    fontSize: 13,
    // marginTop: 5,
    fontWeight: "bold",
  },
  Account: {
    flexDirection: "row",
    marginTop: 5,
  },
  noAccount: {
    marginLeft: 100,
    color: "grey",
    fontSize: 13,
    padding: 2,
  },
  register: {
    color: "#F7941D",
    fontWeight: "bold",
  },
});
