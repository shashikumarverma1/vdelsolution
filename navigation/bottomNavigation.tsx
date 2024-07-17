import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import RootStack from './rootStack';
import { Dashboard } from '../screens';
import { Play } from '../screens/Play';
import { View , Text} from 'react-native';
import { GlobalInfo } from '../context/dashDetail';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  const navigation = useNavigation();
   const {dashColor} = useContext(GlobalInfo)
   console.log(dashColor)
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        initialRouteName: 'Home',
        tabBarStyle: { backgroundColor: '#fff' },
        headerShown: false,
        tabBarShowLabel: false, // Hide the labels
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Connect') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Play') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          }
          return (
            <View
              style={{
                backgroundColor: focused ? dashColor : 'transparent', // Set the background color on selected tab
                borderRadius: 25,
                paddingHorizontal: 25,
                paddingVertical:8,
                display:"flex", flexDirection:"row" , alignItems:"center",
              
              }}
            >
              
              <Ionicons name={iconName} size={size} color={color} />
        { focused && <Text style={{paddingLeft:5}}>{route.name}</Text>}
            </View>
          );
        },
        tabBarActiveTintColor: '#272735',
        tabBarInactiveTintColor: 'gray',
      })}
      
    >
      <Tab.Screen name="Home" component={RootStack} />
      <Tab.Screen
        name="Menu"
        component={Dashboard}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen name="User" component={RootStack} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
