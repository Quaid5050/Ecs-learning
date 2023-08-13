import React, { useContext } from "react"
import { View } from "react-native";
import { Text } from "react-native-elements"
import { AuthContext } from "../../../services/Auth/AuthContext"

const DashboardScreen = () => {
    const { studentId } = useContext(AuthContext);
   
    return (
        <View>
            <Text>Dashboard Screen </Text>
            <Text>Student ID {studentId}</Text>
       </View>
    )
}

export default DashboardScreen;
