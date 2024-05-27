import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMovies } from "../../api/fetch";
import { handleMovieItemPress } from "../../helper/helper";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies("family").then((result) => setMovies(result));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TextInput
          placeholder="Search"
          clearButtonMode="always"
          style={styles.searchBox}
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
        />

        <View style={styles.moviesContainer}>
          {filteredMovies.map((movie) => (
            <View style={styles.movieItem} key={movie.id}>
              <Image
                source={{ uri: movie.posterURL }}
                style={styles.movieImage}
              />
              <Text>{movie.title}</Text>
              {/* Render other movie details here */}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flex: 1,
  },
  searchBox: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 8,
  },
  moviesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
  },
  movieItem: {
    backgroundColor: "#fff",
    margin: 5,
    padding: 10,
    borderRadius: 8,
  },
  movieImage: {
    height: 180,
    minWidth: 150,
    borderRadius: 5,
  },
});
