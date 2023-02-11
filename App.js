import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./app/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "./app/screens/Settings";
import Account from "./app/screens/Account";
import Information from "./app/screens/Information";
import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: "front",
          drawerPosition: "left",
          swipeEdgeWidth: 500,
          drawerHideStatusBarOnOpen: true,
          headerShown: false,

          drawerStyle: {
            backgroundColor: "#c6cbef",
            width: 240,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={Settings}
          options={{
            drawerIcon: () => (
              <FontAwesome name="gear" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Account"
          component={Account}
          options={{
            drawerIcon: () => (
              <FontAwesome name="user" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Information"
          component={Information}
          options={{
            drawerIcon: () => (
              <FontAwesome name="info-circle" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
