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
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { data } from "../app/data.js";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
export const Home = () => {
  const { width: viewportWidth } = Dimensions.get("window");

  const [carouselData, setCarouselData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  //const [loading, setLoading] = useState(false);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    setCarouselData(data);

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

        <View
          style={{
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            justifyContent: "flex-end",
          }}
        >
          <LinearGradient
            colors={["transparent", "black"]}
            style={styles.gradient}
          />
          <Image source={{ uri: item.titleImage }} style={styles.titleImage} />

          <Text style={styles.genres}>
            {" "}
            {item.languages.join(". ")}{" "}
            <FontAwesome size={6} name="circle" color="white" />{" "}
            {item.genres.join(".")}
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
        autoplay={true}
        autoplayDelay={10000}
        autoplayInterval={10000}
        //onSnapToItem={(index) => setSlide({ activeSlide: index })}
      />

      <Pagination
        dotsLength={carouselData.length}
        //activeDotIndex={activeSlide}
        containerStyle={{
          position: "absolute",
          top: "48%",
          alignSelf: "center",
          width: "100%",
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <View
        style={{
          top: 0,

          marginTop: 10,
          alignItems: "space-between",
          width: "100%",
          position: "absolute",
        }}
      >
        <View style={styles.logo}>
          <Image
            source={{
              uri: "https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg",
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
        <View style={styles.subscribe}>
          <Text
            style={{
              color: "rgb(255, 204, 117)",
              fontSize: 12,
              fontWeight: "500",
              alignSelf: "center",
            }}
          >
            Subscribe
          </Text>
        </View>
      </View>

      <View style={{ position: "absolute", top: "55%" }}>
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
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  logo: {
    height: 50,
    position: "absolute",
    width: 50,
    zIndex: 3,
    top: 0,
    marginLeft: 10,
  },

  subscribe: {
    // paddingTop: 4px,
    // padding-bottom: 4px;
    // padding-right: 2px;
    // padding-left: 8px;
    justifyContent: "center",
    flexDirection: "row",
    width: 70,
    height: 24,
    backgroundColor: "rgba(109, 102, 89, 0.2)",
    borderBottomColor: "rgb(229, 231, 235)",
    borderColor: "rgb(255, 204, 117)",
    borderWidth: 1,
    marginTop: 20,
    marginRight: 10,

    // border-bottom-left-radius: 18px;
    // border-bottom-right-radius: 18px;
    // border-top-right-radius: 18px;
    // border-top-left-radius: 18px;
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  carouselItem: {
    backgroundColor: "black",
    borderRadius: 8,
    height: "73%",
    width: "100%",
    position: "relative",
  },

  image: {
    width: "100%",
    height: "70%",
    borderRadius: 2,
    resizeMode: "cover",
    zIndex: 0,
  },

  titleImage: {
    width: "100%",
    height: 100,
    contentFit: "contain",
    zIndex: 5,
  },

  genres: {
    color: "#fff",
    fontSize: 15,
    marginTop: 5,
    zIndex: 5,
    flexDirection: "row",
    fontWeight: "700",
  },

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 270,
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
