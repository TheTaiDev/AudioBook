import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";
export class Categories extends Component {
  render() {
    const dataCategori = [
      {
        name: "Art",
      },
      {
        name: "Business",
      },
      {
        name: "Comedy",
      },
      {
        name: "Drama",
      },
      {
        name: "Art",
      },
      {
        name: "Business",
      },
      {
        name: "Comedy",
      },
      {
        name: "Drama",
      },
    ];
    return (
      <View
        style={{
          marginTop: 40,
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
            Categories
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
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              paddingLeft: 30,
              gap: 20,
            }}
          >
            {dataCategori.map((val, index) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 80,
                    backgroundColor: "#F5F5FA",
                    height: 55,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 24,
                      fontWeight: 400,
                      color: "#2E2E5D",
                    }}
                  >
                    {val.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Categories;
