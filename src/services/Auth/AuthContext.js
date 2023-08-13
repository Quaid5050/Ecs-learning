// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [studentId, setStudentId] = useState(null);

    const login = (studentId) => {
        // Your login logic here...
        // For example, after successful login, you can call setIsAuthenticated(true);
        setStudentId(studentId);
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Your logout logic here...
        // For example, after logout, you can call setIsAuthenticated(false);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated,studentId, login, logout, }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
