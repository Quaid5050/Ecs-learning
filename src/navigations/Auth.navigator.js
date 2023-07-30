import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//screen
import LoginScreen from '../screens/auth/LoginScreen';


const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigation;