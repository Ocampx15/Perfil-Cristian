import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const student = {
    name: "Cristian Montealegre",
    bio: "Soy Cristian, me encanta la música, el fútbol y todo lo que tenga que ver con la tecnología. Siempre ando buscando aprender algo nuevo y vivir nuevas experiencias.",
    photo: require ("./assets/foto.jpeg"),
    songs: [
      { title: "VUELVE CANDY B - BAD BUNNY", url: "https://open.spotify.com/intl-es/track/3mRF0YNsDdFKFnxwg16hSz?si=fbe8abaf7e5740d3"},
      { title: "SAINT PABLO - KANYE WEST", url: "https://open.spotify.com/intl-es/track/1o0kWPueYo94LIjPYOE5Nf?si=de02876f7c1a4a3a"}
    ]
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>
        <Image source={student.photo} style={styles.photo} />
        <Text style={styles.title}>{student.name}</Text>
        <Text style={styles.bio}>{student.bio}</Text>
      </View>

      <Text style={styles.sectionTitle}> Mis Canciones Favoritas</Text>

      {student.songs.map((song, index) => (
        <TouchableOpacity
          key={index}
          style={styles.songButton}
          onPress={() => Linking.openURL(song.url)}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#1DB954", "#1ed760"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <LottieView
              source={require("./assets/animations/Recording.json")}
              autoPlay
              loop
              style={styles.lottieIcon}
            />
            <Text style={styles.songText}>{song.title}</Text>
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4, 
    marginBottom: 15,
    width: "95%",
    maxWidth: 500,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  songButton: {
    width: "100%",
    maxWidth: 350,
    marginVertical: 8,
    borderRadius: 15,
    overflow: "hidden", 
    elevation: 3,
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 15,
  },
  lottieIcon: {
    width: 40,
    height: 40,
    marginRight: 18,
  },
  songText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    flexShrink: 1,
    textAlign:"center",
    marginLeft: 4,
  },
});
