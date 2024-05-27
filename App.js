import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import SelectRole from './Pages/SelectRole';
import Home from './Pages/Home';
import HomeParticipant from './Pages/HomeParticipant';
import UpgradePlan from './Pages/UpgradePlan';
import TablePlan from './Pages/TablePlan';
import GymkhanaMain from './Pages/GymkhanaMain';
import GymkhanaTask from './Pages/GymkhanaTask';
import GymkhanaCompleted from './Pages/GymkhanaCompleted';
import GymkhanaStart from './Pages/GymkhanaStart';
import ProfileParticipant from './Pages/ProfileParticipant';
import ProfileOrganizer from './Pages/ProfileOrganizer';
import ProfileSettingsOrganizer from './Pages/ProfileSettingsOrganizer';
import ProfileSettingsParticipant from './Pages/ProfileSettingsParticipant';
import AppInformation from './Pages/AppInformation';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="GymkhanaMain">
        
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SelectRole" component={SelectRole} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeParticipant" component={HomeParticipant} />
        <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
        <Stack.Screen name="TablePlan" component={TablePlan} />
        <Stack.Screen name="GymkhanaTask" component={GymkhanaTask} />
        <Stack.Screen name="GymkhanaMain" component={GymkhanaMain} />
        <Stack.Screen name="GymkhanaCompleted" component={GymkhanaCompleted} />
        <Stack.Screen name="GymkhanaStart" component={GymkhanaStart} />
        <Stack.Screen name="ProfileParticipant" component={ProfileParticipant} />
        <Stack.Screen name="ProfileOrganizer" component={ProfileOrganizer} />
        <Stack.Screen name="ProfileSettingsOrganizer" component={ProfileSettingsOrganizer} />
        <Stack.Screen name="ProfileSettingsParticipant" component={ProfileSettingsParticipant} />
        <Stack.Screen name="AppInformation" component={AppInformation} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}