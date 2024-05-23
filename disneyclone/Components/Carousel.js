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
import { data } from "../data";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";

export const CarouselComponent = () => {
  const { width: viewportWidth } = Dimensions.get("window");
  const [carouselData, setCarouselData] = useState([]);

  const carouselRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    setCarouselData(data);
  }, []);

  const handleCarouselItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCarouselItemPress(item)}>
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

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    backgroundColor: "black",
    borderRadius: 8,
    height: "73%",
    width: "100%",
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

  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 270,
    zIndex: 0,
  },
});
