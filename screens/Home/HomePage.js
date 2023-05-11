import { Text, View } from "react-native";

import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Search from "../Search/Search";
import Releases from "./Releases";
import Library from "./Library";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePagex() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4838D1",
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Releases" component={Releases} />
    </Stack.Navigator>
  );
}

export class HomePage extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#4838D1",
          headerShown: false,
        }}
        initialRouteName="Search"
      >
        <Tab.Screen
          name="HomePagex"
          component={HomePagex}
          options={{
            tabBarLabel: "HomePagex",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ size }) => (
              <Icon name="md-library-outline" color={"#4838D"} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
export default HomePage;
