import React, { useContext, useState, useEffect } from 'react'

import { ActivityIndicator, View, Text } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

//navigations content
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { AppThemeProvider } from '../components/ThemeProvider';

//app screens stacks
import { AccountStack, AddStack, DashboardStack, SettingStack, SubjectStack } from './App.navigations-stack';

const AppNavigation = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="blue" />
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
            <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue", tabBarShowLabel: false, tabBarInactiveTintColor: "gray", tabBarActiveBackgroundColor: "#FFFFFF", tabBarInactiveBackgroundColor: "#FFFFFF" }}>
                <Tab.Screen name="dashboard" component={DashboardStack}
                    options={setTabOptions('Dashboard', 'home')} />

                <Tab.Screen
                    name="subjects" component={SubjectStack}
                    options={setTabOptions('Subjects', 'book')} />
                <Tab.Screen
                    name="add" component={AddStack}
                    options={setTabOptions('add', 'add')} />
                <Tab.Screen
                    name="setting" component={SettingStack}
                    options={setTabOptions('Setting', 'settings')} />
                <Tab.Screen
                    name="account" component={AccountStack}
                    options={setTabOptions('Account', 'person')} />
            </Tab.Navigator>
        </NavigationContainer >

    )
}

export default AppNavigation