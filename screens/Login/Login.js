import {
  Image,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
            Login to Your Account
          </Text>
        </View>
        <View
          style={{
            paddingTop: 32,
            gap: 20,
          }}
        >
          <TextInput
            value={email}
            onchangeText={(text) => setEmail(text)}
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
            value={password}
            onchangeText={(text) => setPassword(text)}
            secureTextEntry={true}
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
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              fontWeight: 400,
              color: "#2E2E5D",
            }}
          >
            Remember me
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
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
              Login{" "}
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("ForgetPassword")}
            style={{
              paddingLeft: 210,
              fontWeight: 700,
              lineHeight: 24,
              color: "#F77A55",
              fontSize: 16,
            }}
          >
            Forget Password ?
          </Text>
          {/* or login width */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 42,
            }}
          >
            <Text
              style={{
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 24,
                color: "#2E2E5D",
              }}
            >
              Or login with
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 30,

                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/facebook.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/google.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 90,
                  height: 60,
                  backgroundColor: "#FFFFFF",
                  borderWidth: 1,
                  borderRadius: 8,
                  borderColor: "#4838D1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={require("../../assets/images/twiwter.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontWeight: 400,
                  lineHeight: 24,
                  color: "#2E2E5D",
                  fontSize: 16,
                  paddingRight: 8,
                }}
              >
                Don’t have an accoun’t ?
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
                style={{
                  fontWeight: 700,
                  lineHeight: 24,
                  color: "#F77A55",
                  fontSize: 16,
                }}
              >
                Register
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
