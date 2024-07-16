import { createStackNavigator } from "@react-navigation/stack";
import { Dashboard } from "../screens";
import PetDashBoard from "../screens/petDashboard";

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ animationEnabled: false, headerShown: false }}
    >
        <Stack.Screen name="Home" component={Dashboard} />
      <Stack.Screen name="PetDashBoard" component={PetDashBoard} />
    
    </Stack.Navigator>
  );
}
export default RootStack;
