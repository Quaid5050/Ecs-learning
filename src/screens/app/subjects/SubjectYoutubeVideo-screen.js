import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import YoutubePlayer from "react-native-youtube-iframe";
import * as ScreenOrientation from 'expo-screen-orientation';


const App = ({ navigation, route }) => {
    const [youtubeVideoId] = useState(route.params.videoId);
    const [youtubeVideoTitle] = useState(route.params.videoTitle);
    const [playing, setPlaying] = useState(false);
    const playerRef = useRef();
    const [isFullScreen, setIsFullScreen] = useState(false);


    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);


    const handleFullScreenChange = (status) => {
        setIsFullScreen(status);
    };


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("Video completed!");
        }
    }, []);


    useEffect(() => {
        // this time now need to turn on the Auto rotata automatically when screen is in full mode the orientatio is perform
        const handleOrientationChange = async () => {
            try {
                if (isFullScreen) {
                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
                } else {
                    await ScreenOrientation.unlockAsync();
                }
            } catch (error) {
                console.error('Error locking/unlocking screen orientation:', error);
            }
        };

        handleOrientationChange();
        return () => {
            ScreenOrientation.unlockAsync();
        };
    }, [isFullScreen]);



    return (
        <SafeAreaView style={{ flex: 1, padding: 5 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="video-library" size={30} color="black" />
                    <Text style={styles.headerText}>{youtubeVideoTitle}</Text>
                </View>
                <View style={styles.videoContainer}>

                    <YoutubePlayer
                        height={800}
                        play={playing}
                        playerRef={playerRef}
                        videoId={youtubeVideoId}
                        onChangeState={onStateChange}
                        onFullScreenChange={handleFullScreenChange}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    header: {
        marginTop: 25,
        padding: 5,
        margin: 10,
        borderRadius: 8,
        shadowColor: "gray",
        shadow: 2,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F1F1F1",
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    videoContainer: {
        margin: 2,

    },


});

export default App;
