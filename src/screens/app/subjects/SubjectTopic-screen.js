import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { AuthContext } from '../../../services/Auth/AuthContext';

const SubjectTopicScreen = ({ route, navigation }) => {
    const { studentId } = useContext(AuthContext);
    const { subjectId, subjectName, chapterId } = route.params;
    const [topicsData, setTopicsData] = useState([]);
    const [videos, setVideos] = useState([]);
    const [youtubes, setYoutubes] = useState([]);
    const [pdfs, setPdfs] = useState([]);
    const [texts, setTexts] = useState([]);

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
            separateDataByType(data);
        } catch (error) {
            console.error('Error fetching topics data:', error);
        }
    };

    const separateDataByType = (data) => {
        const videoTopics = [];
        const youtubeTopics = [];
        const pdfTopics = [];
        const textTopics = [];

        for (const key in data) {
            const topic = data[key];
            switch (topic.type) {
                case 'video':
                    videoTopics.push(topic);
                    break;
                case 'youtube':
                    youtubeTopics.push(topic);
                    break;
                case 'pdf':
                    pdfTopics.push(topic);
                    break;
                case 'text':
                    textTopics.push(topic);
                    break;
                default:
                    console.log('Unknown topic type:', topic.type);
            }
        }

        setVideos(videoTopics);
        setYoutubes(youtubeTopics);
        setPdfs(pdfTopics);
        setTexts(textTopics);
    };

    const renderTopic = (item, iconName) => (
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
        switch (item.type) {
            case 'video':
                return renderTopic(item, <MaterialCommunityIcons name="video" size={24} color="black" />);
            case 'youtube':
                return renderTopic(item, <Ionicons name="logo-youtube" size={24} color="black" />);
            case 'pdf':
                return renderTopic(item, <FontAwesome name="file-pdf-o" size={24} color="black" />);
            case 'text':
                return renderTopic(item, <FontAwesome name="file-text-o" size={24} color="black" />);
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={[...videos, ...youtubes, ...pdfs, ...texts]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

export default SubjectTopicScreen;
