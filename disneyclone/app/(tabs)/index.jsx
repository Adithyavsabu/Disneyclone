import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { data } from "../data.js";
const Tab = () => {
  const { width: viewportWidth } = Dimensions.get("window");

  const [carouselData, setCarouselData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  //const [loading, setLoading] = useState(false);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    setCarouselData(data);
    console.log("data", data);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/movies/comedy"
        );
        const data = await response.json();
        setMoviesData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const handleCarouselItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };

  const handleMovieItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.bannerImage }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        />
        <View
          style={{
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <Image source={{ uri: item.titleImage }} style={styles.titleImage} />

          <Text style={styles.genres}>
            {" "}
            {item.languages.join(", ")}...
            {item.genres.join(". ")}
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Subscribe to Watch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="#ffffff" />
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={viewportWidth}
        itemWidth={viewportWidth}
        layout={"default"}
        pagination={true}
      />
      <View style={{ position: "absolute", top: "50%" }}>
        <Text style={styles.sectionTitle}>Latest Releases</Text>
        <FlatList
          data={moviesData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    zIndex: 0,
    flexDirection: "column",
    //    position: "absolute",
    height: "100%",
    width: "100%",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  carouselItem: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: "70%",
    width: "100%",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
    zIndex: 0,
  },

  titleImage: {
    width: "100%",
    height: 70,
    resizeMode: "contain",
    zIndex: 5,
  },

  genres: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    zIndex: 5,
    flexDirection: "row",
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 370,
    zIndex: 0,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    gap: 10,
  },

  button: {
    backgroundColor: "rgba(250, 247, 251, 0.1)",
    padding: 13,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

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

export default Tab;
