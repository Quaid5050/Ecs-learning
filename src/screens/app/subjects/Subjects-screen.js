import React from "react"

import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { subjects } from "./data/subjectsData";
const Subjects = ({ navigation }) => {

    const handleSubjectPress = (subjectId, subjectName) => {
        console.log(subjectId, subjectName)
        //navigate to next screen with subjectId
        navigation.navigate('SubjectTopics', { subjectId: subjectId, subjectName: subjectName });
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
            <FlatList
                data={subjects}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
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