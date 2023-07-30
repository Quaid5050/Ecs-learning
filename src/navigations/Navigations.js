
import React, { useEffect, useState } from 'react';
import AuthNavigator from './Auth.navigator.js';
import AppNavigator from './App.navigator';

const Navigations = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsAuthenticated(true)
        }, 3000);
    }, []);

    if (isAuthenticated) {
        return (
            <AppNavigator />
        )
    } else {
        return (
            <AuthNavigator />
        )
    }

}

export default Navigations