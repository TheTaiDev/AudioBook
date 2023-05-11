import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Releases({ navigation }) {
  const dataReleases = [
    {
      name: "The Prisoner’s Key",
      img: require("../../assets/images/bestseller.png"),
      title: "C.J Archer",
    },
    {
      name: "Light Mage",
      img: require("../../assets/images/bestseller1.png"),
      title: "Laurie Forest",
    },
    {
      name: "The Black Witch",
      img: require("../../assets/images/bestseller2.png"),
      title: "Laurie Forest",
    },
    {
      name: "The Kidnapper’s",
      img: require("../../assets/images/bestseller3.png"),
      title: "Emily R. King",
    },
    {
      name: "The Prisoner’s Key",
      img: require("../../assets/images/bestseller.png"),
      title: "C.J Archer",
    },
    {
      name: "Light Mage",
      img: require("../../assets/images/bestseller1.png"),
      title: "Laurie Forest",
    },
    {
      name: "The Black Witch",
      img: require("../../assets/images/bestseller2.png"),
      title: "Laurie Forest",
    },
    {
      name: "The Kidnapper’s",
      img: require("../../assets/images/bestseller3.png"),
      title: "Emily R. King",
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFF",
      }}
    >
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 30,
            paddingTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Icon
            onPress={() => navigation.navigate("Home")}
            name="chevron-back-outline"
            size={25}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: 24,
              color: "#2E2E5D",
            }}
          >
            New Releases
          </Text>
          <View></View>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginTop: 25,
            flexDirection: "row",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          {dataReleases.map((val, index) => {
            return (
              <View
                style={{
                  width: 160,

                  height: 210,
                  // backgroundColor: "red",
                }}
              >
                <View>
                  <Image
                    style={{
                      width: 160,
                      borderRadius: 12,
                      height: 160,
                    }}
                    source={val.img}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 24,
                      color: "#2E2E5D",
                      fontWeight: 500,
                    }}
                  >
                    {val.name}
                  </Text>
                  <Text
                    style={{
                      color: "#4838D1",
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: 18,
                    }}
                  >
                    {val.title}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
