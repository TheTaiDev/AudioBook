import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./screens/Splash";
import Login from "./screens/Login/Login";
import SignUp from "./screens/Login/SignUp";
import Confirmation from "./screens/Login/Confirmation";
import HomePage from "./screens/Home/HomePage";
import ForgetPassword from "./screens/Login/ForgetPassword";
import EmailSend from "./screens/Login/EmailSend";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "./screens/Login/OnBoarding";
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="EmailSend" component={EmailSend} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
