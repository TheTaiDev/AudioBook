import {
  Image,
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import Swiper from "react-native-swiper";

export default function OnBoarding({ navigation }) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../assets/images/onboardingbgr.png")}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: "#7466E3",
                width: 14,
                height: 14,
                borderRadius: 7,
                marginLeft: 3,
                marginRight: 12,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: 250,
            left: 10,
            right: 10,
            // color : "#7466E3",
          }}
          activeDot={
            <View
              style={{
                backgroundColor: "#F77A55",
                width: 14,
                height: 14,
                borderRadius: 7,
                marginLeft: 3,
                marginRight: 12,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          showsButtons={false}
          showsPagination
        >
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: 270,
                  height: 270,
                }}
                source={require("../../assets/images/onboardingimg.png")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 50,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Tittle One
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontWeight: 600,
                  lineHeight: 22,
                  color: "#2E2E5D",
                }}
              >
                Lorem ipsum dolor sit amet la maryame dor sut colondeum.
              </Text>
            </View>
            {/* 2 nut button */}
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                marginTop: 200,
              }}
            >
              <View
                style={{
                  width: 148,
                  // backgroundColor: "green",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 56,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 500,
                    color: "#4838D1",
                  }}
                >
                  Skip
                </Text>
              </View>
              <View
                style={{
                  width: 148,
                  backgroundColor: "#4838D1",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 56,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Skip
                </Text>
              </View>
            </View>
          </View>
          {/* 2 */}
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: 270,
                  height: 270,
                }}
                source={require("../../assets/images/onboardingimg.png")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 50,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Tittle Two
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontWeight: 16,
                  lineHeight: 22,
                  color: "#2E2E5D",
                }}
              >
                Lorem ipsum dolor sit amet la maryame dor sut colondeum.
              </Text>
            </View>
            {/* 2 nut button */}
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                marginTop: 200,
              }}
            >
              <View
                style={{
                  width: 148,
                  // backgroundColor: "green",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 56,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 500,
                    color: "#4838D1",
                  }}
                >
                  Skip
                </Text>
              </View>
              <View
                style={{
                  width: 148,
                  backgroundColor: "#4838D1",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  height: 56,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  Skip
                </Text>
              </View>
            </View>
          </View>
          {/* 3 */}
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Image
                style={{
                  width: 270,
                  height: 270,
                }}
                source={require("../../assets/images/onboardingimg.png")}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                marginHorizontal: 50,
                gap: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: 24,
                  color: "#2E2E5D",
                }}
              >
                Tittle Two
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontWeight: 16,
                  lineHeight: 22,
                  color: "#2E2E5D",
                }}
              >
                Lorem ipsum dolor sit amet la maryame dor sut colondeum.
              </Text>
            </View>
            {/* 2 nut button */}
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                marginTop: 200,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={{
                  width: 300,
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
                  Lets Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
      </View>
    </ImageBackground>
  );
}
