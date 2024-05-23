import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import SelectRole from './Pages/SelectRole';
import Home from './Pages/Home';
import HomeParticipant from './Pages/HomeParticipant';
import UpgradePlan from './Pages/UpgradePlan';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="UpgradePlan">
        
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SelectRole" component={SelectRole} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeParticipant" component={HomeParticipant} />
        <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}