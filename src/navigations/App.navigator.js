import React, { useContext, useState, useEffect } from 'react'

import { ActivityIndicator, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

//navigations content
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { AppThemeProvider } from '../components/ThemeProvider';

//app screens stacks
import { DashboardStack, SettingStack } from './App.navigations-stack';

const AppNavigation = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="orange" />
            </View>
        );
    }

    const setTabOptions = (title, iconName) => ({
        title,
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name={iconName} size={size} color={color} />
        ),
    });


    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer >
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "#ffc400", tabBarShowLabel: false, tabBarInactiveTintColor: "gray", tabBarActiveBackgroundColor: "#FFFFFF", tabBarInactiveBackgroundColor: "#FFFFFF" }}>
                <Tab.Screen name="dashboard" component={DashboardStack}
                    options={setTabOptions('Dashboard', 'family-restroom')} />
                <Tab.Screen
                    name="setting" component={SettingStack}
                    options={setTabOptions('Setting', 'shopping-basket')} />
            </Tab.Navigator>
        </NavigationContainer >

    )
}

export default AppNavigation