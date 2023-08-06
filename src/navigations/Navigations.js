// Navigations.js
import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthNavigator from './Auth.navigator';
import AppNavigator from './App.navigator';
import { AuthContext } from '../services/Auth/AuthContext';

const Navigations = () => {
    const { isAuthenticated } = useContext(AuthContext);

    // Optional: Add any loading state while checking authentication
    // For example, you can show an ActivityIndicator while checking the authentication status
    useEffect(() => {
        // Do any asynchronous checks here (e.g., check token, user authentication)
        // If authenticated, setIsAuthenticated(true)
    }, []);

    // Render the appropriate navigator based on authentication status
    if (isAuthenticated === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    } else if (isAuthenticated) {
        return <AppNavigator />;
    } else {
        return <AuthNavigator />;
    }
};

export default Navigations;
