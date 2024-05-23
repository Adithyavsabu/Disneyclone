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
import { useNavigation } from "@react-navigation/native";

import { Image } from "expo-image";
import { getMovies } from "../api/fetch";

export const MovieCard = ({ heading, genre }) => {
  const { width: viewportWidth } = Dimensions.get("window");
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovies(genre).then((result) => setMovies(result));
  }, []);

  const handleMovieItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };
  return (
    <>
      <Text style={styles.sectionTitle}>{heading}</Text>
      <FlatList
        data={movies}
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
    </>
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
