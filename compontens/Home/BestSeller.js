import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class BestSeller extends Component {
  render() {
    const dataSeller = [
      {
        name: "The Prisoner’s Key",
        img: require("../../assets/images/bestseller.png"),
        list: "Laurie Forest",
      },
      {
        name: "Light Mage",
        img: require("../../assets/images/bestseller1.png"),
        list: "Laurie Forest",
      },
      {
        name: "The Black Witch",
        img: require("../../assets/images/bestseller2.png"),
        list: "Laurie Forest",
      },
      {
        name: "The Kidnapper’s",
        img: require("../../assets/images/bestseller3.png"),
        list: "Laurie Forest",
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
            Best Seller
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

        <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            flexDirection: "row",
            marginLeft: 30,
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataSeller.map((val, index) => {
              return (
                <View
                  style={{
                    width: 320,
                    height: 150,
                    backgroundColor: "#F5F5FA",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 30,
                    borderRadius: 12,
                  }}
                >
                  {/* image */}
                  <View>
                    <Image
                      style={{
                        height: 120,
                        width: 120,
                        borderRadius: 12,
                      }}
                      source={val.img}
                    />
                  </View>
                  {/* section */}
                  <View
                    style={{
                      paddingLeft: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#010104",
                        lineHeight: 24,
                      }}
                    >
                      {val.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: 24,
                        color: "#6A6A8B",
                      }}
                    >
                      {val.list}{" "}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        paddingTop: 20,
                        paddingBottom: 15,
                      }}
                    >
                      <Icon name="star" size={20} color={"#F77A55"} />
                      <Icon name="star" size={20} color={"#F77A55"} />
                      <Icon name="star" size={20} color={"#F77A55"} />

                      <Icon name="star" size={20} color={"#F77A55"} />

                      <Icon name="star-outline" size={20} />
                    </View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        lineHeight: 18,
                        color: "#6A6A8B",
                      }}
                    >
                      1,000+ Listeners
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
}

export default BestSeller;
