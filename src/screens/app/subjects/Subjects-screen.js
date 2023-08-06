import React from "react"

import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
const Subjects = ({ navigation }) => {


    const subjects = [
        { id: '1', subject: 'Mathematics', image: require('./data/images/physics.jpg') },
        { id: '2', subject: 'Science', image: require('./data/images/physics.jpg') },
        { id: '3', subject: 'History', image: require('./data/images/physics.jpg') },
        { id: '4', subject: 'English', image: require('./data/images/physics.jpg') },
        { id: '5', subject: 'Computer Science', image: require('./data/images/physics.jpg') },
        { id: '6', subject: 'Art', image: require('./data/images/physics.jpg') },

    ];

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
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    subject: {
        fontSize: 14,
        fontWeight: "bold",

    },
});


export default Subjects;