import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export const Studios = () => {
  return (
    <>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-disney.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-pixar.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-national.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-starwars.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-marvel.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.wrap}>
        <Image
          source={require("../assets/images/viewers-hotstar-specials.png")}
          style={styles.image}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrap: {
    height: 60,
    width: 110,
    backgroundColor: " rgb(22, 24, 31)",
    justifyContent: "center",
    margin: 3,
  },
  image: {
    height: 50,
    width: 100,
    alignSelf: "center",
  },
});
