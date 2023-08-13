import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Icon, Divider } from 'react-native-elements';
import axios from 'axios';
import { AuthContext } from '../../../services/Auth/AuthContext';

const SubjectChapters = ({ navigation, route }) => {
    const [subjectId] = useState(route.params.subjectId);
    const [subjectName] = useState(route.params.subjectName)
    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { studentId } = useContext(AuthContext);
    useLayoutEffect(() => {
        navigation.setOptions({ title: subjectName });
    }, [navigation, subjectId]);

    useEffect(() => {
        fetchChapters();
    }, []);

    const fetchChapters = async () => {
        try {
            const response = await axios.get(`https://learning.org.in/ecs-app-data/students-wise-subjects-chapters.php?stu_code=${studentId}&subject_id=${subjectId}`);

            // Check if the response status code is 200 (OK)
            if (response.status === 200) {
                const data = response.data;
                const chaptersArray = Object.keys(data).map(key => ({
                    id: parseInt(key),   // Convert key to integer for id
                    chapter: data[key], // Use data value for chapter
                }));
                console.log(chaptersArray);
                setChapters(chaptersArray);
            } else {
                console.error('Error fetching chapters: Unexpected status code', response.status);
            }

            setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            console.error('Error fetching chapters:', error);
            setIsLoading(false); // Set loading state to false in case of an error
        }
    };

    const handleChapterPress = (chapterId) => {
        navigation.navigate("SubjectTopic", {
            subjectId,
            chapterId,
            subjectName,
        });
    }


    const renderChapter = ({ item }) => (
        <View style={styles.chapterContainer}>
            <TouchableOpacity onPress={() => {
                handleChapterPress(item.id);
            }}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 8 }}>
                    <Icon name="book-open-page-variant" type="material-community" color="#0000FF" style={{ margin: 5 }} />
                    <Text style={styles.chapterTitle}>{item.chapter}</Text>
                </View>
            </TouchableOpacity>
            <Divider margin={4} />
        </View>
    );

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000FF" />
            </View>
        );
    }

    return (
        <FlatList
            data={chapters}
            renderItem={renderChapter}
            keyExtractor={(item) => item.id.toString()} // Convert id to string for keyExtractor
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    chapterContainer: {
        marginBottom: 16,
        borderRadius: 2,
        backgroundColor: '#f6F6F6',
        borderWidth: 0.1,
    },
    chapterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SubjectChapters;
