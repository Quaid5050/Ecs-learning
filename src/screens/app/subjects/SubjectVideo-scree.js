import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';

const SubjectVideo = ({ navigation, route }) => {
    const video = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [status, setStatus] = useState({});
    const [url, setUrl] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const [isPlaying, setIsPlaying] = useState(true);

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

    useLayoutEffect(() => {
        const subjectName = route.params.subjectName;
        navigation.setOptions({ title: subjectName });
    }, [navigation]);

    const onFullscreenChange = (isFullscreen) => {
        // setInFullscreen(isFullscreen);
    };

    useEffect(() => {
        const videoUrl = route.params.videoUrl;
        const videoTitle = route.params.videoTitle;
        setVideoTitle(videoTitle);
        setUrl(videoUrl);
        setIsPlaying(true)
    }, [url])

    const togglePlayback = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    const handlePlaybackStatusUpdate = (playbackStatus) => {
        setIsPlaying(playbackStatus.isPlaying);
        setStatus(playbackStatus);

    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 5 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <MaterialIcons name="video-library" size={30} color="black" />
                    <Text style={styles.headerText}>{videoTitle}</Text>
                </View>

                <ScrollView style={styles.videoScrollview}>
                    <View style={[styles.videoContainer, { backgroundColor: 'red' }]}>
                        <Video
                            ref={video}
                            style={[styles.video, { backgroundColor: 'black' }]}
                            source={{
                                uri: url,
                            }}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            onFullscreenUpdate={(e) => {
                                if (e.fullscreenUpdate === 1) {
                                    setIsFullScreen(true);
                                } else {
                                    setIsFullScreen(false);
                                }
                            }}
                            isLooping
                            isMuted={false}
                            shouldPlay={isPlaying}
                            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                        />
                    </View>
                    <View style={styles.flatListContainer}>
                        <View style={styles.playButtonContainer}>
                            <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
                                <MaterialIcons
                                    name={isPlaying ? 'pause' : 'play-arrow'}
                                    size={40}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>


            </View>
        </SafeAreaView>
    );
}

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
        height: 320,
        margin: 5,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    playButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        marginTop: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        padding: 10,
    },
    flatListContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: "#F1F1F1",
        borderRadius: 10,
        padding: 5

    },
    videoScrollview: {
        flex: 1,
    }
});

export default SubjectVideo;
