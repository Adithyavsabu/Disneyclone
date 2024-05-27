import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { data } from "../data/data";
import { Image } from "expo-image";

export const CarouselComponent = () => {
  const { width: viewportWidth } = Dimensions.get("window");
  const [carouselData, setCarouselData] = useState([]);
  const [activeSlide, setSlide] = useState([]);
  const carouselRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    setCarouselData(data);
  }, []);

  const handleCarouselItemPress = (item) => {
    navigation.navigate("MovieDetail", { movie: item });
  };
  <LinearGradient colors={["transparent", "black"]} style={styles.gradient} />;

  const renderItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => handleCarouselItemPress(item)}>
      <View style={styles.carouselItem} key={index}>
        <Image source={{ uri: item.bannerImage }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "black"]}
          style={styles.gradient}
        />

        <View
          style={{
            height: "100%",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image source={{ uri: item.titleImage }} style={styles.titleImage} />
          <Text style={styles.genres}>
            {item.languages.join(" • ")}
            {" • "}
            {item.genres.join(" • ")}
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
        onSnapToItem={(index) => setSlide(index)}
      />
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          alignSelf: "center",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
        tappableDots={true}
        dotColor={"rgba(255, 255, 255, 0.92)"} // Add this line
        inactiveDotColor={"rgba(255, 255, 255, 0.4)"} // Add this line
        inactiveDotStyle={{}}
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
    height: "100%",
  },

  image: {
    width: "100%",
    height: "50%",
    borderRadius: 2,
    resizeMode: "cover",
    zIndex: 0,
  },

  titleImage: {
    width: "100%",
    height: 100,
    contentFit: "contain",
    zIndex: 5,
    //position: "absolute",
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
    padding: 12,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  gradient: {
    left: 0,
    right: 0,
    top: 0,
    height: 240,
    position: "absolute",
  },
});
