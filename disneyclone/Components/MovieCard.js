import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { Image } from "expo-image";
import { getMovies } from "../api/fetch";

export const MovieCard = (heading, genre) => {
  const { width: viewportWidth } = Dimensions.get("window");
  const [movies, getMovieByGenre] = useState([]);
  const [familyMovies, setFamilyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [mysteryMovies, setMysteryMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies("family").then((result) => setFamilyMovies(result));
    getMovies("horror").then((result) => setHorrorMovies(result));
    getMovies("mystery").then((result) => setMysteryMovies(result));
    getMovies("drama").then((result) => setDramaMovies(result));
  }, []);

  const handleMovieItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };
  return (
    <View style={{ position: "absolute", top: "55%" }}>
      <Text style={styles.sectionTitle}>Latest Releases</Text>
      <FlatList
        data={familyMovies}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMovieItemPress(item)}>
            <View style={styles.movieItem}>
              <Image
                source={{ uri: item.posterURL }}
                style={styles.movieImage}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 10,
  },

  movieItem: {
    marginLeft: 20,
  },

  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 5,
  },

  movieTitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});
