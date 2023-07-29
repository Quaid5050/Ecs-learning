import * as React from 'react';
import { View, StyleSheet, Button, FlatList, TouchableOpacity, Text, SafeAreaView, LogBox, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import * as ScreenOrientation from 'expo-screen-orientation';
import { videoLinks, starterVideo } from './data';



const App = () => {
  const video = React.useRef(null);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [status, setStatus] = React.useState({});
  const [url, setUrl] = React.useState(starterVideo);
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    return () => {
      LogBox.ignoreLogs([]);
    };
  }, []);




  React.useEffect(() => {
    // Lock the orientation to landscape when entering full-screen mode
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      // Unlock the orientation when exiting full-screen mode
      ScreenOrientation.unlockAsync();
    }
  }, [isFullScreen]);



  const renderItem = ({ item }) => {
    const handlePlayPause = () => {
      if (url === item.uri) {
        video.current.pauseAsync();
      } else {
        setUrl(item.uri);
      }
    };

    return (
      <TouchableOpacity onPress={handlePlayPause}>
        <View style={styles.videoItem}>
          <Image style={styles.image} source={item.thum} />
          <Text>{item.name}</Text>
          {url === item.uri ? (
            <MaterialIcons name="pause-circle-filled" size={34} color="red" onPress={handlePlayPause} />
          ) : (
            <MaterialIcons name="play-circle-filled" size={34} color="red" onPress={handlePlayPause} />
          )}
        </View>
      </TouchableOpacity>
    );
  };







  return (
    <SafeAreaView style={{ flex: 1, padding: 5 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons name="video-library" size={30} color="black" />
          <Text style={styles.headerText}>Video Player</Text>
        </View>
        <View style={styles.videoContainer}>
          <Video
            ref={video}
            style={styles.video}
            source={{ uri: url }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(status)}
            onFullscreenUpdate={(status) => console.log(status)}
          />
        </View>


        <View style={styles.flatListContainer}>
          <FlatList
            data={videoLinks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

      </View>
    </SafeAreaView >
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
    height: '40%',
    margin: 5,

  },
  video: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "black"
  },
  flatListContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    padding: 5

  },
  videoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,

  }
});

export default App;
