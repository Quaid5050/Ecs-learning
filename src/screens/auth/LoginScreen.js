import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { AuthContext } from '../../services/Auth/AuthContext';

const LoginPage = () => {
    const navigation = useNavigation();
    const { login } = useContext(AuthContext); // Use
    const [studentId, setStudentId] = useState(907);
    const handleLogin = () => {
        // Your login logic here...
        // If login is successful, navigate to the main app (AccountStack)
        login(studentId);

    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/ecs-logo.png')}
                    placeholder="ecs logo"
                    contentFit="cover"
                    transition={1000}
                />
                <Text h3 style={styles.logoText}>
                    ECS LEARNING{' '}
                    <Icon
                        name="graduation-cap"
                        type="font-awesome"
                        color="gray"
                        size={24}
                    />
                </Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.labelText}>
                    Enter phone number
                </Text>
                <Input
                    placeholder="Enter phone number"
                    leftIcon={<Icon name="user" type="font-awesome" color="gray" />}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="gray"
                />
                <Text style={styles.labelText}>
                    Password
                </Text>
                <Input
                    placeholder="Password"
                    leftIcon={<Icon name="lock" type="font-awesome" color="gray" />}
                    secureTextEntry
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="gray"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        // Handle login logic here
                        handleLogin();
                    }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    logoContainer: {
        marginBottom: 20,
    },
    logoText: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 26,
        flexDirection: 'row',
        alignItems: 'center',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
    },
    labelText: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        color: 'gray',
        fontSize: 14,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
    },
    inputText: {
        color: 'black',
        fontSize: 16,
    },
    button: {
        backgroundColor: "blue",
        width: '100%',
        borderRadius: 8,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    forgot: {
        margin: 2,
        color: "blue",
    },
    image: {

    }
});

export default LoginPage;
