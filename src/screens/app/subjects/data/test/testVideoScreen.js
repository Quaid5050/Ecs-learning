import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Divider, Icon } from "react-native-elements";

const videosAndTopics = [
    { id: "v1", title: "Video 1", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v2", title: "Video 2", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v3", title: "Video 3", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v4", title: "Video 3", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v5", title: "Video 3", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
    { id: "v6", title: "Video 3", url: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" },
];
const SubjectTopic = ({ route, navigation }) => {
    const { topicName } = route.params;

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    const handleVideoPress = (videoUrl, videoTitle) => {
        console.log("Video Pressed:", videoUrl);
        const subjectName = route.params.subjectName;
        navigation.navigate("SubjectVideo", {
            videoUrl: videoUrl,
            videoTitle: videoTitle,
            subjectName: subjectName,
        });
    };

    const renderVideo = ({ item }) => (
        <View style={styles.videoItemContainer}>
            <TouchableOpacity style={styles.videoContainer} onPress={() => handleVideoPress(item.url, item.title)}>
                <Icon name="play-circle" type="font-awesome" color="#FF0000" size={28} />
                <Text style={styles.videoTitle}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("press chapter review")}>
                <View style={styles.chapterReviewContainer}>
                    <Icon name="book" type="font-awesome" color="#0000FF" size={28} />
                    <Text style={styles.itemTitle}>{topicName} review</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={videosAndTopics}
            renderItem={renderVideo}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
                <View style={styles.topicContainer}>
                    <Text style={styles.topicTitle}>{topicName}</Text>
                </View>
            }
            ListFooterComponent={
                <TouchableOpacity onPress={() => console.log("press mock test")}>
                    <View style={styles.mockTestContainer}>
                        <Icon name="list-alt" type="font-awesome" color="#0000FF" size={28} />
                        <View style={styles.mockTestInfo}>
                            <Text style={styles.itemTitle}>Mock tests on this topic</Text>
                            <Text style={styles.percentText}>50%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            }
            ItemSeparatorComponent={() => <Divider width={1} style={styles.divider} />}
            contentContainerStyle={styles.container}
        />
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
        marginBottom: 5,
    },
    topicTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    videoItemContainer: {
        marginBottom: 15,
    },
    videoContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        padding: 10,
        borderRadius: 5,
    },
    videoTitle: {
        fontSize: 18,
        marginLeft: 10,
    },
    chapterReviewContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    itemTitle: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: "bold",
    },
    mockTestContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    mockTestInfo: {
        marginLeft: 15,
    },
    percentText: {
        fontSize: 14,
        fontStyle: "italic",
        color: "#0000FF",
    },
    divider: {
        marginVertical: 10,
    },
});

export default SubjectTopic;