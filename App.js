import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ChooseRestaurantCheckout from "./src/screens/ChooseRestaurantCheckout";
import Login from "./src/screens/login";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <ChooseRestaurantCheckout></ChooseRestaurantCheckout>
      <StatusBar style="auto" />
      <Home/> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(250, 250, 250)",
    alignItems: "center",
    justifyContent: "center",
  },
});
