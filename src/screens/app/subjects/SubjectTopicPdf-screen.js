import React, { useLayoutEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const SubjectTopicPdf = ({ navigation, route }) => {
    const [pdfUrl] = useState(route.params.pdfUrl);
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
                source={{ uri: `http://docs.google.com/gview?embedded=true&url=${pdfUrl}` }}
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
        backgroundColor: 'rgba(179, 179, 179, 0.5)',
    },
});

export default SubjectTopicPdf;
