import React, { useState, useEffect, useRef, useContext } from "react";
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
import Ionicons from "@expo/vector-icons/Ionicons";

import { Image } from "expo-image";

import { FavouriteContext } from "../../Context/FavouriteContext";

// useEffect(() => {
//   console.log("selected movies rae :", selectedMovies);

//   // to load the data when the site laods or it will result in asynchronous operations of data
// }, [selectedMovies]);

export default function Myspace() {
  const { selectedMovies, isFavorited, handleFavouriteList } =
    useContext(FavouriteContext);
  const { width: viewportWidth } = Dimensions.get("window");
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovies(selectedMovies);
  }, [selectedMovies]);

  const handleMovieItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };
  return (
    <View>
      <Text style={styles.sectionTitle}>Favourites</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => `${item.id}-${item.genre}`}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMovieItemPress(item)}>
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
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: "black",
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
