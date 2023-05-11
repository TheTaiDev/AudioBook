import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function EmailSend({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "90%",
          justifyContent: "center",
          marginHorizontal: 20,
          alignItems: "center",
          marginTop: 130,
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
          }}
          source={require("../../assets/images/splash.png")}
        />
      </View>
      {/* form input */}
      <View
        style={{
          width: "90%",
          marginTop: 30,
          // backgroundColor: "red",
          marginHorizontal: 30,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#2E2E5D",
              lineHeight: 24,
              fontWeight: 600,
              // fontStyle: "normal",
            }}
          >
            Email Sent
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: "#2E2E5D",
              lineHeight: 24,
              paddingTop: 20,
              fontWeight: 400,
              // fontStyle: "normal",
            }}
          >
            We sent an email to y***@mail.com with a link to get back into your
            account.
          </Text>
        </View>
        <View
          style={{
            paddingTop: 32,
            gap: 20,
          }}
        >
          {/* text coookis */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          ></View>
          {/* or login width */}
          <View style={{}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                width: 350,
                height: 60,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,

                borderColor: "#4838D1",

                borderRadius: 8,
                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  textAlign: "center",
                  fontWeight: 500,

                  color: "#4838D1",
                }}
              >
                Close{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
