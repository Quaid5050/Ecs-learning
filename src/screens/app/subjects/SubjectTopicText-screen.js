import React, { useLayoutEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const SubjectTopicText = ({ navigation, route }) => {
    const [textUrl] = useState(route.params.textUrl);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    const handleWebViewLoad = () => {
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: textUrl }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                scalesPageToFit={true}
                allowFileAccess={true}
                onLoad={handleWebViewLoad}
            />
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(179, 179, 179, 0.5)', // Grey color similar to #ggb
    },
});

export default SubjectTopicText;
