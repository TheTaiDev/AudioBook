import { Text, View } from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class Header extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 70,
          marginHorizontal: 30,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/splash.png")}
          />
          <Text
            style={{
              fontSize: 24,
              lineHeight: 30,
              color: "#4838D1",
              fontWeight: 700,
            }}
          >
            Audi
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 30,
              color: "#4838D1",
              fontWeight: 300,
            }}
          >
            Books
          </Text>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 30,
              color: "rgba(247, 122, 85, 1)",
              fontWeight: 700,
            }}
          >
            .
          </Text>
        </View>
        <View>
          <Icon name="md-settings-outline" size={20} color={"#4838D1"} />
        </View>
      </View>
    );
  }
}

export default Header;
