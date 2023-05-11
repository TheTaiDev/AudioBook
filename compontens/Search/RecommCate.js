import { Text, View } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export class RecommCate extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 335,
            height: 152,
            // backgroundColor: "green",
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
            Recommended Categories
          </Text>

          <View
            style={{
              flexDirection: "row",
              gap: 20,
              paddingTop: 16,
            }}
          >
            <View
              style={{
                width: 160,
                height: 48,
                backgroundColor: "#F5F5FA",
                borderRadius: 12,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Icon name="bar-chart-outline" size={25} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Business
              </Text>
            </View>
            <View
              style={{
                width: 160,
                height: 48,
                backgroundColor: "#F5F5FA",
                borderRadius: 12,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Icon name="person-outline" size={25} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Personal...
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              paddingTop: 16,
            }}
          >
            <View
              style={{
                width: 160,
                height: 48,
                backgroundColor: "#F5F5FA",
                borderRadius: 12,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Icon name="ios-caret-forward-circle-outline" size={25} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Music
              </Text>
            </View>
            <View
              style={{
                width: 160,
                height: 48,
                backgroundColor: "#F5F5FA",
                borderRadius: 12,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
              }}
            >
              <Icon name="ios-camera-outline" size={25} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Photo...
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default RecommCate;
