import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

export const PetDashBoard = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;

  const categories = [
    {
      color1: "#FFFFFF",
      color2: "#CBE0FF",
      text: "Construction",
      icon: "person",
    },
    {
      color1: "#FFFFFF",
      color2: "#FFE9BE",
      text: "Entertainment",
    },
    { color1: "#FEF2F3", color2: "#FFB0DD", text: "Pet Care" },
    { color1: "#FFFFFF", color2: "#C0FCF6", text: "Home Care" },
    { color1: "#FFFFFF", color2: "#FFC8AB", text: "Events" },
    {
      color1: "#FFFFFF",
      color2: "#CFCFFF",
      text: "Healthcare",
    },
  ];

  return (
    <ScrollView style={{ marginTop: 20, backgroundColor: "#ffffff" }}>
      <LinearGradient
        colors={["#FFB5B1", "#CD7ED9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          paddingTop: 55,
          paddingHorizontal: 24,
          height: 350,
        }}
      >
        {/* Your content here */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/menu2.png")}
              style={{ marginRight: 5 }}
            />
          </Pressable>

          <Image
            source={require("../assets/infinity2.png")}
            style={{ marginRight: 5 }}
          />
          <View
            style={[
              {
                padding: 10,
                paddingLeft: 15,
                backgroundColor: "#FFD7E5",
                borderRadius: 9,
              },
            ]}
          >
            <Image
              source={require("../assets/bell.png")}
              style={{ marginRight: 5 }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              lineHeight: 23,
              fontWeight: "700",

              marginBottom: 10,
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 19,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            Fancy for a wash today!
          </Text>
          <Image
            source={require("../assets/leftdogfoot.png")}
            style={{ position: "relative", top: 25 }}
          />
          <Image
            source={require("../assets/rightdogfoot.png")}
            style={{
              position: "relative",
              left: windowWidth * 0.85,
              top: -100,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            position: "relative",
            top: -60,
            zIndex: 2,
          }}
        >
          <Image source={require("../assets/dog1.png")} style={{}} />
          <Image source={require("../assets/dog2.png")} style={{}} />
          <Image source={require("../assets/dog3.png")} style={{}} />
        </View>
      </LinearGradient>
      <View
        style={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: "#ffffff",
          height: 70,
          position: "relative",
          top: -65,
          zIndex: 1,
        }}
      />
      <View style={{ marginTop: -95 }}>
        <View
          style={[
            styles.justifyBetween,
            {
              // backgroundColor: "#FFEDF2",
              marginHorizontal: 25,
              marginBottom: 1,
              marginTop: 0,
              zIndex: 1,
            },
          ]}
        >
          <View
            style={[
              styles.input,
              {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 16,
              },
            ]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/search.png")}
                style={{ marginRight: 5 }}
              />
              <TextInput
                // style={styles.input}
                // onChangeText={(e) => setUserData({ ...userData, email: e })}
                // value={userData.email}
                placeholder="What are you looking for?"
                placeholderTextColor="#FF6694"
              />
            </View>
            <Image source={require("../assets/filter.png")} />
          </View>
        </View>
      </View>

      <View style={styles.center}>
        <Image
          source={require("../assets/banner.png")}
          style={{ marginTop: -5 }}
        />
      </View>

      <View
        style={[
          styles.justifyBetween,
          { marginTop: 30, marginBottom: 10, paddingHorizontal: 25 },
        ]}
      >
        <Text style={styles.SubHeading}>Popular Services</Text>
        <Pressable onPress={() => navigation.navigate("TrendingCoin")}>
          <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 25,
        }}
      >
        <Image
          source={require("../assets/petgrooming.png")}
          style={styles.img} resizeMethod="cover"
        />
        <Image source={require("../assets/walking.png")} style={styles.img} resizeMethod="cover" />

        <Image source={require("../assets/dating.png")} style={styles.img} resizeMethod="cover" />
        <Image source={require("../assets/training.png")} style={styles.img} resizeMethod="cover" />
        <Image source={require("../assets/adoption.png")} style={styles.img} resizeMethod="contain" />
      </View>

      <View
        style={[
          styles.justifyBetween,
          { marginTop: 30, marginBottom: 10, paddingHorizontal: 25 },
        ]}
      >
        <Text style={styles.SubHeading}>Service Providers</Text>
        <Pressable onPress={() => navigation.navigate("TrendingCoin")}>
          <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </Text>
        </Pressable>
      </View>
      <View>
        {[1, 1, 2].map((e, index) => {
          return (
            <View style={{ marginVertical: 5, marginBottom: -90 }} key={index}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 20,
                  backgroundColor: "#FFE7EA",
                  borderRadius: 15,
                }}
              >
                <View>
                  <Image
                    source={require("../assets/man.png")}
                    style={{ margin: 20 }}
                  />
                </View>

                <View>
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 14,
                      lineHeight: 16,
                      fontWeight: "600",
                      marginBottom: 3,
                    }}
                  >
                    Rohit Singhania
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 14,
                      fontWeight: "400",
                      maxWidth: "85%",
                      marginBottom: 8,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                  </Text>
                  <View
                    style={{
                      backgroundColor: "#CF76DD",
                      maxWidth: 100,
                      borderRadius: 4,
                    }}
                  >
                    <Pressable>
                      <Text
                        style={{
                          textAlign: "center",
                          paddingVertical: 2,
                          paddingHorizontal: 12,
                          color: "#ffffff",
                        }}
                      >
                        Know More
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <Image
                source={require("../assets/providerBottomLeft.png")}
                style={{
                  position: "relative",
                  top: -46,
                  left: Dimensions.get("window").width * 0.05,
                  zIndex: 1,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
              <Image
                source={require("../assets/providerTopRight.png")}
                style={{
                  position: "relative",
                  top: -145,
                  left: Dimensions.get("window").width * 0.805,
                  zIndex: 1,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </View>
          );
        })}
      </View>
      <View
        style={[
          styles.justifyBetween,
          { marginTop: 20, marginBottom: 10, paddingHorizontal: 25 },
        ]}
      >
        <Text style={styles.SubHeading}>Ratings</Text>
        <Pressable onPress={() => navigation.navigate("TrendingCoin")}>
          <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.justifyBetween,
          { marginTop: -5, marginBottom: 15, paddingHorizontal: 25 },
        ]}
      >
        <Text style={{
            fontSize: 12,
            fontWeight: "600",
            lineHeight:14,
            color:"#FF6694"
        }}>13 Reviews</Text>
        <Pressable onPress={() => navigation.navigate("TrendingCoin")}>
         
          <View style={[styles.flex]}>
          <Text style={[styles.SubHeading, { color: "#FF6694" }]}>
          Write a Review{" "}
          </Text>
          <Text style={[styles.SubHeading, { color: "#FF6694" }]}>
          <Image
                source={require("../assets/icon10.png")}
              
              />
          </Text>
          </View>
        </Pressable>
      </View>
      {[1, 2].map((e, index) => {
        return (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginVertical: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                borderColor: "#FFCCD2",
                borderWidth: 1,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <View style={{ paddingLeft: 18 }}>
                <Text>Pooja Jain</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  {[1, 2, 3, 4].map((e, index) => {
                    return (
                      <Image
                        source={require("../assets/bone2.png")}
                        style={{ margin: 1, borderBottomRightRadius: 20 }}
                      />
                    );
                  })}
                  <Image
                    source={require("../assets/bone1.png")}
                    style={{ margin: 1 }}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 10,
                    lineHeight: 14,
                    width: "80%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.
                </Text>
              </View>
              <View>
                {index == 0 && (
                  <Image
                    source={require("../assets/pooja1.png")}
                    style={{
                      marginLeft: -50,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                )}
                {index == 1 && (
                  <Image
                    source={require("../assets/pooja2.png")}
                    style={{
                      marginLeft: -50,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "600",
  },
  SubHeading: {
    fontSize: 14,
    fontWeight: "700",
  },
  popularSection: {
    fontSize: 14,
    fontWeight: "800",
  },
  img: {
    // margin:5
  },
  justifyBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  categoriesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  categoryContainer: {
    // width: '48%',
    marginVertical: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    textAlign: "center",
    // paddingVertical: 10,
    paddingLeft: 5,
    paddingRight: 15,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#EEE6FF",
    alignItems: "center",
    borderRadius: 15,
  },
  cardText: {
    fontSize: 12,
    fontWeight: "800",
    maxWidth: 186,
    textAlign: "justify",
    lineHeight: 18,
  },
  exploreBtn: {
    fontSize: 10,
    fontWeight: "800",
    lineHeight: 18,
    backgroundColor: "#995BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  overboll: {
    position: "relative",
    left: 10,
    borderRadius: 15,
    top: -20,
  },
  rightTop: {
    position: "relative",
    left: -50,
    borderRadius: 15,
    top: -22,
    zIndex: -1,
  },
  bottomLeft: {
    position: "relative",
    top: -26,
    left: 20,
  },
  input: {
    width: "100%",
    height: 40,
    // borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#666666",
    backgroundColor: "#FFEDF2",
  },
});

export default PetDashBoard;
