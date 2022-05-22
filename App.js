import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/login";
import Search from "./src/screens/search";
import SuccPay from "./src/screens/SuccPay";
import RateUs from "./src/screens/RateUs";
import Signup from "./src/screens/RegisterScreen";
import Landing from "./src/screens/Landing";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />

        <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
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
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
