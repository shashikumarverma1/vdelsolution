import React, { useContext } from "react";
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
import { GlobalInfo } from "../context/dashDetail";

export const Dashboard = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const { dashColor, setDashColor } = useContext(GlobalInfo);
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
      icon: "person",
    },
    { color1: "#FEF2F3", color2: "#FFB0DD", text: "Pet Care", icon: "person" },
    { color1: "#FFFFFF", color2: "#C0FCF6", text: "Home Care", icon: "person" },
    { color1: "#FFFFFF", color2: "#FFC8AB", text: "Events", icon: "person" },
    {
      color1: "#FFFFFF",
      color2: "#CFCFFF",
      text: "Healthcare",
      icon: "person",
    },
  ];

  return (
    <ScrollView style={{ marginTop: 20, backgroundColor: "#ffffff" }}>
      <LinearGradient
        colors={["#9766FF", "#F7F3FF"]}
        start={{ x: 0, y: 0 }} // Vertical gradient: start from top
        end={{ x: 0, y: 1 }} // Vertical gradient: end at bottom
        locations={[0, 1]}
        style={{ borderBottomRightRadius: 50 }}
      >
        {/* Your content here */}
        <View style={{ height: 200, marginTop: 40 }}>
          <View
            style={[
              styles.justifyBetween,
              { alignItems: "center", paddingHorizontal: 20 },
            ]}
          >
            <Image source={require("../assets/menu.png")} />
            <Image
              source={require("../assets/infinity.png")}
              style={{ position: "relative", top: -7 }}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={{}}>
        <View
          style={[
            styles.justifyBetween,
            {
              marginTop: 20,
              backgroundColor: "#EDFFCE",
              paddingHorizontal: 20,
              maxWidth: "80%",
              borderTopEndRadius: 20,
              borderBottomEndRadius: 20,
              position: "relative",
              top: -150,
              borderTopLeftRadius: 20,
            },
          ]}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                lineHeight: 24,
                marginBottom: 5,
                paddingTop: 30,
              }}
            >
              Welcome,
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 28,
                maxWidth: 200,
                marginBottom: 5,
              }}
            >
              Find your {"     "} Dream Sector!
            </Text>

            <View
              style={[
                { display: "flex", flexDirection: "row", alignItems: "center" },
                styles.input,
                { width: windowWidth * 0.65 },
              ]}
            >
              <Image source={require("../assets/Search2.png")} />
              <TextInput
                style={{
                  paddingLeft: 5,
                  fontWeight: "400",
                  fontSize: 12,
                  lineHeight: 14,
                }}
                // onChangeText={(e) => setUserData({ ...userData, email: e })}
                // value={userData.email}
                placeholder="What are you looking for?"
              />
            </View>
          </View>

          <View>
            <Image
              source={require("../assets/welRight.png")}
              style={{ position: "relative", left: -64 }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            height: 30,
            backgroundColor: "#EDFFCE",
            width: "20%",
            marginTop: -150,
          }}
        />
      </View>

      <View
        style={{
          marginTop: -150,
          backgroundColor: "#ffffff",
          borderTopLeftRadius: 25,
        }}
      >
        <View
          style={[
            styles.justifyBetween,
            {
              marginTop: 20,
              marginBottom: 10,
              paddingHorizontal: 20,
              backgroundColor: "#ffffff",
            },
          ]}
        >
          <Text style={styles.SubHeading}>Explore Categories</Text>
          <Pressable onPress={() => navigation.navigate("TrendingCoin")}>
            <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </Text>
          </Pressable>
        </View>
        <View style={styles.categoriesContainer}>
          {categories.map((e, index) => (
            <View key={index} style={styles.categoryContainer}>
              <LinearGradient
                colors={[e.color1, e.color2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <Pressable
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                   
                  }}
                  onPress={() => {
                    setDashColor("#FFE7EA");
                    navigation.navigate("PetDashBoard");
                  }}
                >
                 { index==0 && <Image source={require("../assets/icon6.png")} style={styles.categoryText} />}
                 { index==1 && <Image source={require("../assets/icon1.png")} style={styles.categoryText} />}
                 { index==2 && <Image source={require("../assets/icon5.png")} style={styles.categoryText} />}
                 { index==3 && <Image source={require("../assets/icon4.png")} style={styles.categoryText} />}
                 { index==4 && <Image source={require("../assets/icon2.png")} style={styles.categoryText} />}
                 { index==5 && <Image source={require("../assets/icon3.png")} style={styles.categoryText} />}
                  <Text style={styles.categoryText}>{e.text}</Text>
                </Pressable>
              </LinearGradient>
            </View>
          ))}
        </View>
      </View>
      <View
        style={[
          styles.justifyBetween,
          { marginTop: 20, marginBottom: 10, paddingHorizontal: 20 },
        ]}
      >
        <Text style={styles.popularSection}>Popular Sectors</Text>
        <Pressable>
          <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </Text>
        </Pressable>
      </View>

      <View style={[styles.justifyBetween, { paddingHorizontal: 20 }]}>
        <Image source={require("../assets/home.png")} />
        <Image source={require("../assets/health.png")} />
      </View>

      <View
        style={[
          styles.justifyBetween,
          { marginTop: 20, marginBottom: 10, paddingHorizontal: 20 },
        ]}
      >
        <Text style={styles.popularSection}>Recommended for you</Text>
        <Pressable>
          <Text style={[styles.SubHeading, { color: "#0D88C3" }]}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </Text>
        </Pressable>
      </View>

      {[1, 1].map((e, index) => (
        <View key={index}>
          <View style={[styles.flex, styles.card]}>
            <View style={{ margin: 14 }}>
              <Image source={require("../assets/pink.png")} />
            </View>
            <View style={{ paddingLeft: 5 }}>
              <Text style={styles.cardText}>
                Now share the Construction Sectors with your anyone and can save
                it as bookmark
              </Text>
              <View>
                <View style={[styles.justifyBetween, { alignItems: "center" }]}>
                  <Text
                    style={{ fontSize: 10, fontWeight: "400", lineHeight: 24 }}
                  >
                    Updated | 06:30 AM
                  </Text>
                  <Pressable>
                    <Text style={styles.exploreBtn}>Explore</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <Image
              source={require("../assets/overboll.png")}
              style={styles.overboll}
            />
            <Image
              source={require("../assets/rightTop.png")}
              style={styles.rightTop}
            />
          </View>
          <Image
            source={require("../assets/bottomleft.png")}
            style={styles.bottomLeft}
          />
        </View>
      ))}
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
  gradient: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    paddingHorizontal:5
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
    // width: "100%",
    height: 40,
    // borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#666666",
    backgroundColor: "#ffffff",
  },
});

export default Dashboard;
