import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";

export class Recommended extends Component {
  render() {
    const dataRFY = [
      {
        img: require("../../assets/images/recommen1.png"),
      },
      {
        img: require("../../assets/images/recommen1.png"),
      },
      {
        img: require("../../assets/images/recommen1.png"),
      },
      {
        img: require("../../assets/images/recommen1.png"),
      },
      {
        img: require("../../assets/images/recommen1.png"),
      },
    ];
    return (
      <View
        style={{
          paddingTop: 40,
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
            Recommended For You
          </Text>
          <TouchableOpacity>
            <Text
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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {dataRFY.map((val, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 300,
                  paddingHorizontal: 30,
                  marginTop: 20,
                  flexDirection: "row",
                  marginRight: 20,
                }}
              >
                <Image
                  style={{
                    width: 200,
                    height: 300,
                    borderRadius: 12,
                  }}
                  source={require("../../assets/images/recommen1.png")}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default Recommended;
