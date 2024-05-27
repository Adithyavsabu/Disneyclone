import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { handleMovieItemPress } from "../helper/helper";
import { FavouriteContext } from "../Context/FavouriteContext";

export const Card = (movies) => {
  console.log("movies", movies);
  const navigation = useNavigation();
  const { selectedMovies, isFavorited, handleFavouriteList } =
    useContext(FavouriteContext);

  useEffect(() => {
    console.log("fav list", selectedMovies);
  }, [selectedMovies]);
  return (
    <View>
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
