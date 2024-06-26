import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { getMovies } from "../api/fetch";
import { FavouriteContext } from "../Context/FavouriteContext";
import { handleMovieItemPress } from "../helper/helper";

export const MovieCard = ({ heading, genre }) => {
  const { selectedMovies, isFavorited, handleFavouriteList } =
    useContext(FavouriteContext);
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getMovies(genre).then((result) => setMovies(result));
    console.log("fav list", selectedMovies);
  }, [selectedMovies]);

  return (
    <View>
      <Text style={styles.sectionTitle}>{heading}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}-${item.genre}`}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleMovieItemPress(item, navigation)}
          >
            <View style={styles.movieItem}>
              <Image
                source={{ uri: item.posterURL }}
                style={styles.movieImage}
              />

              <TouchableOpacity
                onPress={() => handleFavouriteList(item)}
                style={{ position: "absolute" }}
              >
                <Ionicons
                  name="heart"
                  size={32}
                  color={isFavorited(item) ? "red" : "white"}
                />
              </TouchableOpacity>
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
