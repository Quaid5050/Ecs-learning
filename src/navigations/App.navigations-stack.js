import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Dashboard Screens
import DashboardScreen from '../screens/app/dashboard/Dashboard-screen';


// Settings Screens
import SettingScreen from '../screens/app/setting/Setting-screen';



//Subjects Screem
import SubjectsScreen from '../screens/app/subjects/Subjects-screen';
import SubjectChaptersScreen from '../screens/app/subjects/SubjectChapters-screen';
import SubjectTopicScreen from '../screens/app/subjects/SubjectTopic-screen';
import SubjectVideoScreen from '../screens/app/subjects/SubjectVideo-screen';
import SubjectNotesScreen from '../screens/app/subjects/SubjectNotes-screen';
import SubjectYoutubeVideoScreen from '../screens/app/subjects/SubjectYoutubeVideo-screen';
import SubjectTopicPdfScreen from '../screens/app/subjects/SubjectTopicPdf-screen';
import SubjectTopicTextScreen from '../screens/app/subjects/SubjectTopicText-screen';
//account screen
import AccountScreen from '../screens/app/account/Account-screen';



//addscreen {currently name is not clearly defined we will change it later }
import AddScreen from '../screens/app/add/Add-screen';





//global screen options for all screens
const screenOptions = {
    headerShown: true,
};


export const DashboardStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
    )
}



export const SettingStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
    )
}


export const SubjectStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Subjects" component={SubjectsScreen} />
            <Stack.Screen name="SubjectChapters" component={SubjectChaptersScreen} />
            <Stack.Screen name="SubjectTopic" component={SubjectTopicScreen} />
            <Stack.Screen name="SubjectVideo" component={SubjectVideoScreen} />
            <Stack.Screen name="SubjectYoutubeVideo" component={SubjectYoutubeVideoScreen} />
            <Stack.Screen name="SubjectTopicPdf" component={SubjectTopicPdfScreen} />
            <Stack.Screen name="SubjectTopicText" component={SubjectTopicTextScreen} />
            <Stack.Screen name="SubjectNotes" component={SubjectNotesScreen} />
        </Stack.Navigator>
    )
}


export const AddStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
    )
}


export const AccountStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Navigator>
    )
}


//add more stacks 







