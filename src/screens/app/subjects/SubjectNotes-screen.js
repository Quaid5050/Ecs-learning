import React, { useLayoutEffect } from "react";
import { Text } from "react-native";
import { View } from "react-native";


const SubjectNotes = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({ title: "Notes" });
    }, [navigation]);
    return (
        <View>
            <Text>Notes Screens</Text>
        </View>
    )
}

export default SubjectNotes;