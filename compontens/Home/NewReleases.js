import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function NewReleases() {
  const dataNew = [
    {
      name: "The Prisoner’s Key",
      img: require("../../assets/images/bestseller.png"),
    },
    {
      name: "Light Mage",
      img: require("../../assets/images/bestseller1.png"),
    },
    {
      name: "The Black Witch",
      img: require("../../assets/images/bestseller2.png"),
    },
    {
      name: "The Kidnapper’s",
      img: require("../../assets/images/bestseller3.png"),
    },
  ];
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Releases");
  };

  return (
    <View
      style={{
        marginTop: 40,
        height: 500,
      }}
    >
      <View
        style={{
          marginHorizontal: 30,

          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: 500,
            color: "#010104",
          }}
        >
          New Releases
        </Text>
        <TouchableOpacity>
          <Text
            onPress={handlePress}
            style={{
              fontSize: 14,
              lineHeight: 21,
              color: "#4838D1",

              fontWeight: 500,
            }}
          >
            See more
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataNew.map((val, index) => {
            return (
              <View
                style={{
                  width: 155,
                  height: 210,
                  marginLeft: 30,
                  marginTop: 20,
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    height: 160,
                    justifyContent: "center",
                    width: 160,
                  }}
                >
                  <Image
                    style={{
                      height: 160,
                      borderRadius: 12,
                      width: 155,
                      alignItems: "center",
                    }}
                    source={val.img}
                  />
                </View>
                <View
                  style={{
                    paddingTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 500,
                      lineHeight: 24,
                      fontSize: 16,
                      color: "#2E2E5D",
                    }}
                  >
                    {val.name}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
