import React, { useLayoutEffect, useState } from 'react';

import WebView from 'react-native-webview';

const SubjectTopicPdf = ({ navigation, route }) => {
    const [pdfUrl] = useState(route.params.pdfUrl);
    console.log(pdfUrl);

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    return (

        <WebView
            source={{ uri: `http://docs.google.com/gview?embedded=true&url=${pdfUrl}` }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            scalesPageToFit={true}
            allowFileAccess={true}
        />

    )
}




export default SubjectTopicPdf;