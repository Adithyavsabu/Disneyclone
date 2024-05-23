import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { Image } from "expo-image";

import { CarouselComponent } from "../../Components/Carousel";
import { MovieCard } from "../../Components/MovieCard";
import { Studios } from "../../Components/Studios";

const Home = () => {
  const { width: viewportWidth } = Dimensions.get("window");

  //const [loading, setLoading] = useState(false);
  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color="#ffffff" />
  //     </View>
  //   );
  // }
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image
              source={{
                uri: "https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.subscribe}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </View>
        </View>
        <View
          style={{
            height: 450,
          }}
        >
          <CarouselComponent />
        </View>
        <View style={{}}>
          <MovieCard genre="horror" heading="Latest Releases" />
          <MovieCard genre="drama" heading="Latest Releases" />
          {/* <MovieCard genre="horror" heading="Latest Releases" />
          <MovieCard genre="drama" heading="Latest Releases" />
       <MovieCard genre="drama" heading="Latest Releases" /> */}
        </View>
        <Text style={{ color: "white" }}>Subscribe</Text>
        <Studios />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flex: 1,
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

    zIndex: 3,
  },

  subscribeText: {
    color: "rgb(255, 204, 117)",
    fontSize: 12,
    fontWeight: "500",
    alignSelf: "center",
  },

  header: {
    marginTop: 10,
    alignItems: "space-between",
    width: "100%",
    position: "absolute",
    zIndex: 3,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
export default Home;
