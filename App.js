import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSection from './pages/HomeSection';
import FlightBooking from './pages/FlightBooking';
import HotelBooking from './pages/HotelBooking';
import TrainsBooking from './pages/TrainsBooking';
import BusBooking from './pages/BusBooking';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FlightPricing from './components/flight/FlightPricing';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeSection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightBooking"
          component={FlightBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelBooking"
          component={HotelBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TrainsBooking"
          component={TrainsBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusBooking"
          component={BusBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FlightPricing"
          component={FlightPricing}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
