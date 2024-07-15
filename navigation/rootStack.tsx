import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, Login, Signup } from '../screens';
import { Profile } from '../screens/profile';
import Pay from '../screens/paymentScreen';
import { Notification } from '../screens/notification';
import { AllCoins } from '../screens/AllCoins';
import { Watchlisted } from '../screens/Watchlist';
import { TrendingCoin } from '../screens/TrendingCoin';
import { CoinDetails } from '../screens/CoinDetails';
import { LineCharts } from '../components/LineChart';
import PetDashBoard from '../screens/petDashboard';



const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
   
       <Stack.Screen name="Home" component={Dashboard} />
       <Stack.Screen name="PetDashBoard" component={PetDashBoard} />
      
    </Stack.Navigator>
  );
}
export default RootStack;