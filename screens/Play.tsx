import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import React from "react";

const windowWidth = Dimensions.get("window").width;

export const Play = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.heading}>Play</Text>
     
     
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 8,
  },
  cardShadow: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 5, // This is for Android
    padding: 15,
    margin: 5,
    width: windowWidth / 1.07,
    maxWidth: windowWidth / 1.07,
  },
  sectionWidth: {
    width: windowWidth * 0.22,
  },
  leftSection: {
    paddingRight: 5,
    width: windowWidth * 0.1,
  },
  rightSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth * 0.79,
    // backgroundColor:"red"
  },
  center: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "grey",
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    marginTop: 5,
    textAlign: "center",
  },
});
