import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import SplashScreen from "react-native-splash-screen";
const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (SplashScreen != null) {
        SplashScreen.hide();
      }
      navigation.replace("OnBoarding");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 160,
          height: 160,
        }}
        source={require("../assets/images/splash.png")}
      />
      <Text
        style={{
          color: "rgba(72, 56, 209, 1)",
          paddingTop: 250,
          fontSize: 14,
          lineHeight: 21,
          fontWeight: 400,
        }}
      >
        Version 1.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});

export default Splash;
