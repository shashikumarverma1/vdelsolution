import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  View,
  Share,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

const CustomSidebarMenu = ({ navigation }: { navigation: any }) => {
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="home" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Home</Text>
          </View>
        </Pressable>
      
     
    
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    // PaddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft: 25,
  },
  heading: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
    paddingLeft: 20,
  },
});
export default CustomSidebarMenu;
