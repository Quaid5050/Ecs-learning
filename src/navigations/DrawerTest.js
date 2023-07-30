import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const DrawerTest = () => {
    React.useEffect(() => {
        // You can add any cleanup logic here if needed
        // LogBox.ignoreAllLogs();
        // return () => {
        //   LogBox.ignoreLogs([]);
        // };
    }, []);

    const Feed = () => {
        return (
            <View>
                {/* Your Feed content goes here */}
            </View>
        );
    };

    const Article = () => {
        return (
            <View>
                {/* Your Article content goes here */}
            </View>
        );
    };

    const Drawer = createDrawerNavigator();

    return (
        <SafeAreaView style={{ flex: 1, padding: 5 }}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Feed" component={Feed} />
                    <Drawer.Screen name="Article" component={Article} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default DrawerTest;
