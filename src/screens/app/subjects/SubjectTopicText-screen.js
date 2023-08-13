import React, { useLayoutEffect, useState } from 'react';

import WebView from 'react-native-webview';

const SubjectTopicText = ({ navigation, route }) => {
    const [textUrl] = useState(route.params.textUrl);
  

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    return (

        <WebView
            source={{ uri: textUrl }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
            allowFileAccess={true}
        />

    )
}




export default SubjectTopicText;