import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Dashboard Screens
import DashboardScreen from '../screens/app/dashboard/DashboardScreen';


// Settings Screens
import SettingScreen from '../screens/app/setting/SettingScreen';

//global screen options for all screens
const screenOptions = {
    headerShown: false,
};


export const DashboardStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
    )
}



export const SettingStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
    )
}


//add more stacks 







