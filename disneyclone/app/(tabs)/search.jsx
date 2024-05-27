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
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { categories } from "../../data/categories";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("family");
  const navigation = useNavigation();

  useEffect(() => {
    getMovies(selectedCategory).then((result) => setMovies(result));
  }, [selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
        <View>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            Trending In
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => handleCategoryChange(category)}
              >
                <Text
                  style={
                    selectedCategory === category
                      ? [styles.buttonStyle, { color: "white" }]
                      : styles.buttonStyle
                  }
                >
                  {/* <Ionicons
                  name="trending-up"
                  size={15}
                  color="white"
                  style={{ position: "absolute" }}
                /> */}
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={styles.moviesContainer}>
          {filteredMovies.map((movie) => (
            <TouchableOpacity
              onPress={() => handleMovieItemPress(movie, navigation)}
            >
              <View style={styles.movieItem} key={movie.imdb}>
                <Image
                  source={{ uri: movie.posterURL }}
                  style={styles.movieImage}
                />
                <Text>{movie.title}</Text>
              </View>
            </TouchableOpacity>
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

  buttonStyle: {
    borderWidth: 2,
    borderColor: "#494747d1",
    color: "#ccc",
    marginLeft: 10,
    padding: 8,
    borderRadius: 8,
  },
});
