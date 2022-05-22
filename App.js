import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login";
import Search from "./src/screens/search";
import SuccPay from "./src/screens/SuccPay";
import RateUs from "./src/screens/RateUs";
import ChooseRestaurantCheckout from "./src/screens/ChooseRestaurantCheckout";
import RegisterScreen from "./src/screens/RegisterScreen";
import Landing from "./src/screens/Landing";
import SignIn from "./src/screens/signIn";
import React from "react";

const Stack = createNativeStackNavigator();
const App = () => {
  const [loading, setlaoding] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setlaoding(false);
    }, 5000);
  }, []);

  return loading ? (
    <Landing />
  ) : (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RegisterScreen">
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />

          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> */}
          {/*
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccPay"
          component={SuccPay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RateUs"
          component={RateUs}
          options={{ headerShown: false }}
        /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );

  // <RateUs/>
};

export default App;
