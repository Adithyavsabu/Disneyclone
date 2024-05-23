import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MovieCard } from "../Components/MovieCard";

export default function MovieDetail({ route }) {
  const { movie } = route.params;
  console.log("movie in moview details", movie);
  return (
    <ScrollView style={styles.container}>
      {movie.posterURL ? (
        <Image source={{ uri: movie.posterURL }} style={styles.image} />
      ) : (
        <Image source={{ uri: movie.bannerImage }} style={styles.image} />
      )}
      {movie.titleImage ? (
        <Image source={{ uri: movie.titleImage }} style={styles.titleImage} />
      ) : (
        <Text style={styles.title}>{movie.title}</Text>
      )}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe to Watch</Text>
      </TouchableOpacity>
      {movie.genre ? (
        <Text style={styles.genres}>{movie.genres.join("| ")}</Text>
      ) : (
        <Text style={styles.genres}>
          Romance | Comedy | Tragedy | Drama | Couples
        </Text>
      )}
      {movie.description ? (
        <Text style={styles.description}>{movie.description}</Text>
      ) : (
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      )}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 40,
          marginBottom: 40,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="add" size={32} color="white" />
          <Text style={styles.iconText}>Watchlist</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-redo-outline" size={32} color="white" />
          <Text style={styles.iconText}>Share</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="heart-outline" size={32} color="white" />
          <Text style={styles.iconText}>Rate</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-down" size={32} color="white" />
          <Text style={styles.iconText}>Download</Text>
        </View>
      </View>
      {/* <Text style={styles.languages}>
        Languages: {movie.languages.join(", ")}
      </Text> */}

      <MovieCard heading="More Like These" genre="horror" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: 16,
    backgroundColor: "black",
    width: "100%",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "white",
    marginTop: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  titleImage: {
    width: "50%",
    height: 100,
    resizeMode: "center",
    zIndex: 5,
    alignSelf: "center",
  },

  description: {
    fontSize: 16,
    color: "#b6b2b2",
    marginTop: 8,
    textAlign: "justify",
    fontFamily: "sans-serif",
  },

  genres: {
    fontSize: 16,
    color: "white",
    marginTop: 30,
    textAlign: "justify",
    fontWeight: "500",
    fontFamily: "sans-serif",
  },

  languages: {
    fontSize: 14,
    color: "white",
    marginTop: 8,
  },

  button: {
    backgroundColor: "white",
    padding: 13,
    borderRadius: 5,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  iconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 15,
    color: "#b6b2b2",
    fontFamily: "sans-serif",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
