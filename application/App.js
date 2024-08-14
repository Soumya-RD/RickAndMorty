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
        <Stack.Screen name='HomeScreen' component={HomeScreen}
          options={{
            title: 'Rick and Morky',
            headerStyle: {
              backgroundColor: '#003049',

            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen name='CardScreen' component={CardScreen}
          options={{
            title: 'All Characters',
            headerStyle: {
              backgroundColor: '#0f4c5c',

            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen}

          options={{
            title: 'Characters Details',
            headerStyle: {
              backgroundColor: '#0f4c5c',

            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',

          }}
        />
        <Stack.Screen name='AliveCardScreen' component={AliveCardScreen}
         options={{
          title: 'Alive Characters',
          headerStyle: {
            backgroundColor:  '#132a13',

          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

        }} />
        <Stack.Screen name='DeadCardScreen' component={DeadCardScreen} 
         options={{
          title: 'Dead Characters',
          headerStyle: {
            backgroundColor:  '#132a13',

          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
