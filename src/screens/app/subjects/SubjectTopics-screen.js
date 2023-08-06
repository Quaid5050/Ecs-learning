// TopicsList.js
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Divider } from 'react-native-elements';

const data = [
    {
        id: 'unit1', // Add the id for each unit
        unit: 'Unit 1: Electric charge and fields',
        topics: [
            { id: '1', name: 'Topic 1' },
            { id: '2', name: 'Topic 2' },
            { id: '3', name: 'Topic 3' },
            { id: '4', name: 'Topic 4' },
        ],
    },
    {
        id: 'unit2', // Add the id for each unit
        unit: 'Unit 2: Electric fields',
        topics: [
            { id: '5', name: 'Topic 5' },
            { id: '6', name: 'Topic 6' },
            { id: '7', name: 'Topic 7' },
            { id: '8', name: 'Topic 8' },
        ],
    },
];

const SubjectTopics = ({ navigation, route }) => {

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    const handleTopicPress = (topicId, topicName) => {
        // Handle the press action for each topic
        console.log('Topic Pressed:', topicId);
        console.log('Topic Name:', topicName);
        const subjectName = route.params.subjectName;
        navigation.navigate('SubjectTopic', {
            topicId,
            topicName,
            subjectName,
        });
    };

    const renderTopic = ({ item }) => (
        <TouchableOpacity
            onPress={() => handleTopicPress(item.id, item.name)}
            activeOpacity={0.5} // Set the activeOpacity to control the opacity when pressed
        >
            <ListItem
                bottomDivider
                containerStyle={styles.topicContainer} // Add a custom style for the topic container
            >
                {/* <Icon name="book" type="font-awesome" color="#0000FF" /> */}
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </TouchableOpacity>

    );

    const renderUnit = ({ item }) => (
        <View style={styles.unitContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 5, }}>
                <Icon name="book-open-page-variant" type="material-community" color="#0000FF" style={{ margin: 5 }} />
                <Text style={styles.unitTitle}>{item.unit}</Text>
            </View>

            <Divider margin={4} />
            <FlatList
                data={item.topics}
                renderItem={renderTopic}
                keyExtractor={(topic) => topic.id}
            />
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderUnit}
            keyExtractor={(item) => item.id} // Use the 'id' as the keyExtractor for the outer FlatList
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    unitContainer: {
        marginBottom: 16,
        borderRadius: 2,
        backgroundColor: '#f6F6F6',
        borderWidth: 0.1,

    },
    unitTitle: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    topicContainer: {
        backgroundColor: '#fcfcfc',
        borderRadius: 5,
        margin: 5,
    },
});

export default SubjectTopics;
