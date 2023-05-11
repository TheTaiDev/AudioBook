import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  
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
          marginTop: 30,
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
            Register{" "}
          </Text>
        </View>
        <View
          style={{
            paddingTop: 32,
            gap: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            style={{
              width: 350,
              borderRadius: 8,
              fontSize: 14,
              lineHeight: 25,
              color: "#B8B8C7",
              paddingLeft: 30,
              height: 60,
              backgroundColor: "#F5F5FA",
            }}
          ></TextInput>
          <TextInput
            placeholder="Password"
            style={{
              width: 350,
              borderRadius: 8,
              fontSize: 14,
              lineHeight: 25,
              color: "#B8B8C7",
              paddingLeft: 30,
              height: 60,
              backgroundColor: "#F5F5FA",
            }}
          ></TextInput>
          <TextInput
            placeholder="Phone Number"
            inputMode="numeric"
            style={{
              width: 350,
              borderRadius: 8,
              fontSize: 14,
              lineHeight: 25,
              color: "#B8B8C7",
              paddingLeft: 30,
              height: 60,
              backgroundColor: "#F5F5FA",
            }}
          ></TextInput>

          {/* text coookis */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                //   paddingLeft: 210,
                fontWeight: 400,
                lineHeight: 24,
                color: "#2E2E5D",
                paddingRight: 6,
                fontSize: 16,
              }}
            >
              By signing up, you agree to our
            </Text>
            <Text
              style={{
                //   paddingLeft: 210,
                fontWeight: 700,
                lineHeight: 24,
                paddingRight: 6,

                color: "#F77A55",
                fontSize: 16,
              }}
            >
              Terms,
            </Text>
            <Text
              style={{
                //   paddingLeft: 210,
                fontWeight: 700,
                lineHeight: 24,

                color: "#F77A55",
                fontSize: 16,
              }}
            >
              Data Policy
            </Text>
            <Text
              style={{
                //   paddingLeft: 210,
                fontWeight: 400,
                lineHeight: 24,
                color: "#2E2E5D",
                paddingRight: 6,
                fontSize: 16,
              }}
            >
              and
            </Text>
            <Text
              style={{
                //   paddingLeft: 210,
                fontWeight: 700,
                lineHeight: 24,

                color: "#F77A55",
                fontSize: 16,
              }}
            >
              Cookies Policy.
            </Text>
          </View>
          {/* or login width */}
          <View
            style={{
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Confirmation")}
              style={{
                width: 350,
                height: 60,
                backgroundColor: "#4838D1",

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
                  color: "#FFFFFF",
                }}
              >
                Register{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                width: 350,
                height: 60,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                marginTop: 20,
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
                Cancel{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
