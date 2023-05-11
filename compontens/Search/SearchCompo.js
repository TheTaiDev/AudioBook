import { Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
export default function SearchCompo() {
  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            width: 335,
            height: 101,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              lineHeight: 36,
              fontWeight: 600,
              color: "#010104",
            }}
          >
            Explore
          </Text>
          <TextInput
            placeholder="Search Books or Author..."
            style={{
              width: "100%",
              color: "#B8B8C7",
              fontSize: 14,
              paddingLeft: 25,
              lineHeight: 21,
              backgroundColor: "#F5F5FA",
              borderRadius: 8,
              marginTop: 10,
              height: 50,
            }}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}
