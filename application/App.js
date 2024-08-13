import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CardScreen from './screens/CardScreen';
import DetailsScreen from './screens/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AliveCardScreen from './screens/AliveCardScreen';
import DeadCardScreen from './screens/DeadCardScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='CardScreen' component={CardScreen} />
        <Stack.Screen name='DetailsScreen'
          component={DetailsScreen} />
        <Stack.Screen name='AliveCardScreen' component={AliveCardScreen} />
        <Stack.Screen name='DeadCardScreen' component={DeadCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
