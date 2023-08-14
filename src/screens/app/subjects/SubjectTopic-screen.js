import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity,Text } from 'react-native';
import { Divider, Icon, ListItem } from 'react-native-elements';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from '../../../services/Auth/AuthContext';
import { Linking } from 'react-native';

const SubjectTopicScreen = ({ route, navigation }) => {
    const { studentId } = useContext(AuthContext);
    const [chapterName] = useState(route.params.chapterName);
    const { subjectId, subjectName, chapterId } = route.params;
    const [topicsData, setTopicsData] = useState([]);
    const [mockTestLink, setMockTestLink] = useState("https://www.google.com/");
    useEffect(() => {
        fetchTopicsData();
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    const fetchTopicsData = async () => {
        try {
            const response = await axios.get(`https://learning.org.in/ecs-app-data/students-wise-subject-chapter-topics.php?stu_code=${studentId}&subject_id=${subjectId}&subject_chapter_id=${chapterId}`);
            const data = response.data;
            setTopicsData(data);
        } catch (error) {
            console.error('Error fetching topics data:', error);
        }
    };


    const openMockTestInBrowser = () => {
        const url = mockTestLink;
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };   

    const handleTopicPress = (item) => {
        // Handle navigation based on the topic type
        switch (item.type) {
            case 'video':
                navigation.navigate('SubjectVideo', {
                    videoTitle: item.topics_name,
                    videoUrl: item.url,
                    subjectName: subjectName,
                });
                break;
            case 'youtube':
                navigation.navigate('SubjectYoutubeVideo', {
                    videoTitle: item.topics_name,
                    videoId: item.url,
                    subjectName: subjectName,
                });
                break;
            case 'pdf':
                navigation.navigate('SubjectTopicPdf', {
                    subjectName: subjectName,
                    pdfUrl: item.url
                });
                break;
            case 'text':
                navigation.navigate('SubjectTopicText', {
                    subjectName: subjectName,
                    textUrl: item.url
                });
                break;
            default:
                console.log('Unknown topic type:', item.type);
        }
    };

    const renderItem = ({ item }) => {
        let iconName = null;
        switch (item.type) {
            case 'video':
                iconName = <MaterialCommunityIcons name="video" size={24} color="blue" />;
                break;
            case 'youtube':
                iconName = <Ionicons name="logo-youtube" size={24} color="red" />;
                break;
            case 'pdf':
                iconName = <FontAwesome name="file-pdf-o" size={24} color="red" />;
                break;
            case 'text':
                iconName = <FontAwesome name="file-text-o" size={24} color="blue" />;
                break;
            default:
                return null;
        }

        return (
            <TouchableOpacity onPress={() => handleTopicPress(item)}>
                <ListItem bottomDivider>
                    {iconName}
                    <ListItem.Content>
                        <ListItem.Title>{item.topics_name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <FlatList
                data={Object.values(topicsData)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitle}>{ chapterName}</Text>
                    </View>
                }
                ListFooterComponent={
                    <TouchableOpacity onPress={() => {
                        openMockTestInBrowser()
                    }}>
                        <View style={styles.mockTestContainer}>
                            <Icon name="list-alt" type="font-awesome" color="#0000FF" size={28} />
                            <View style={styles.mockTestInfo}>
                                <Text style={styles.itemTitle}>Mock tests on this unit</Text>
                                <Text style={styles.percentText}>50%</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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
    mockTestContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
        padding: 20,
        borderRadius: 20,
       
        margin:15,
        
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

export default SubjectTopicScreen;
