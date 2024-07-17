import React, { useContext,  } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalInfo } from "../context/dashDetail";

const CustomSidebarMenu = ({ navigation }: { navigation: any }) => {
 
  const { dashColor, setDashColor } = useContext(GlobalInfo);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setDashColor("#EEE6FF");
            navigation.navigate("Dashboard");
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="home" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Home</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setDashColor("#FFE7EA");
            navigation.navigate("PetDashBoard");
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.icon}>
              <Ionicons name="home" size={20} color="black" />
            </Text>
            <Text style={styles.heading}>Pet Dashboard</Text>
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
