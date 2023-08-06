import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Divider, Icon } from "react-native-elements";

const videos = [
    { id: "v1", title: "Video 1", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v2", title: "Video 2", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v3", title: "Video 3", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
];

const SubjectTopic = ({ route, navigation }) => {
    const { topicId, topicName } = route.params;

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);


    const handleVideoPress = (videoUrl, videoTitle) => {
        // Handle the press action for each video
        console.log("Video Pressed:", videoUrl);
        const subjectName = route.params.subjectName;
        navigation.navigate("SubjectVideo", {
            videoUrl: videoUrl,
            videoTitle: videoTitle,
            subjectName: subjectName,
        })
    };

    const renderVideo = ({ item }) => (
        <TouchableOpacity
            style={styles.videoContainer}
            onPress={() => handleVideoPress(item.url, item.title)}
        >
            <Icon name="play-circle" type="font-awesome" color="#FF0000" size={28} />
            <Text style={styles.videoTitle}>{item.title}</Text>
        </TouchableOpacity>
    );



    return (
        <View style={styles.container}>
            <View style={styles.topicContainer}>
                <Text style={styles.topicTitle}>{topicName}</Text>
            </View>
            <FlatList
                data={videos}
                renderItem={renderVideo}
                keyExtractor={(item) => item.id}
            />
            <Divider width={1} style={{ margin: 10 }} />
            <TouchableOpacity onPress={() => console.log("press chapter review")}>
                <View style={styles.item}>
                    <Icon name="book" type="font-awesome" color="#0000FF" size={28} />
                    <Text style={styles.itemTitle}>{topicName} review</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("press mock test")}>
                <View style={styles.item}>
                    <Icon name="list-alt" type="font-awesome" color="#0000FF" size={28} />
                    <View style={styles.mockTestInfo}>
                        <Text style={styles.itemTitle}>Mock tests on this topic</Text>
                        <Text style={styles.percentText}>50%</Text>
                    </View>
                </View>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        padding: 10,
    },
    topicContainer: {
        alignItems: "center",
        borderWidth: 0.1,
        backgroundColor: "#f6f6f6",
        padding: 8,
        borderRadius: 2,
        marginBottom: 20,
    },
    topicTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    videoContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    videoTitle: {
        fontSize: 18,
        marginLeft: 10,
    },
    item: {
        backgroundColor: '#fcfcfc',
        padding: 20,
        margin: 5,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: "row",
        marginLeft: 20,
    },

    itemTitle: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: "bold",
    },


    percentText: {
        marginLeft: 15,
        fontSize: 14,
        fontStyle: "italic",
        color: "#0000FF",
    },
});

export default SubjectTopic;
