import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import {
  HomeStack,
  CartStack,
  NotificationStack,
  ScanStack,
  UpdateStack,
} from "../stacks";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled="false"
      tabBarOptions={{
        activeTintColor: "#F7941D",
      }}
      tabBarStyle={{
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        backgroundColor: "#ee8b07",
        position: "absolute",
        bottom: 0,
        padding: 10,
        width: "100%",
        height: 84,
        zIndex: 0,
      }}
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Button
              name="home"
              backgroundColor="transparent"
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Button
              name="bell"
              backgroundColor="transparent"
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="ScanStack"
        component={ScanStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Button
              name="briefcase"
              backgroundColor="transparent"
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="UpdateStack"
        component={UpdateStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Button
              name="clock"
              backgroundColor="transparent"
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon.Button
              name="shopping-cart"
              backgroundColor="transparent"
              color="black"
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
