import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { AuthContext } from "../../.././services/Auth/AuthContext";

const Subjects = ({ navigation }) => {
    const { studentId } = useContext(AuthContext);
    const [subjects, setSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        fetchSubjects();
    }, [subjects]); // Fetch data whenever the studentId changes

    const fetchSubjects = async () => {
        try {
            const response = await axios.get(`https://learning.org.in/ecs-app-data/students-wise-subjects.php?stu_code=${studentId}`);
            const data = response.data;

            const subjectsArray = Object.keys(data).map(key => ({
                id: key,
                subject: data[key].name,
                image: { uri: data[key].icon },
            }));

            setSubjects(subjectsArray);
            setIsLoading(false); // Data has been fetched, set loading to false
        } catch (error) {
            console.error('Error fetching subjects:', error);
            setIsLoading(false); // Set loading to false even in case of an error
        }
    };

    const handleSubjectPress = (subjectId, subjectName) => {
        navigation.navigate('SubjectChapters', { subjectId, subjectName });
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleSubjectPress(item.id, item.subject)}>
            <View style={styles.item}>
                <Image source={item.image} style={styles.image} resizeMode="cover" />
                <Text style={styles.subject}>{item.subject}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 200 }} />
            ) : (
                <FlatList
                    data={subjects}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    item: {
        backgroundColor: '#fcfcfc',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    subject: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Subjects;
