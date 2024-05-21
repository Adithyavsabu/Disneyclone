import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function MovieDetail({ route }) {
  const { movie } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.bannerImage }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Text style={styles.genres}>{movie.genres.join(", ")}</Text>
      <Text style={styles.languages}>
        Languages: {movie.languages.join(", ")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },

  title: {
    fontSize: 24,
    color: "white",
    marginTop: 16,
  },

  description: {
    fontSize: 16,
    color: "white",
    marginTop: 8,
  },

  genres: {
    fontSize: 14,
    color: "white",
    marginTop: 8,
  },

  languages: {
    fontSize: 14,
    color: "white",
    marginTop: 8,
  },
});
