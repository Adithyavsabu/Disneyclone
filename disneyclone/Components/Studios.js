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
import { StudioImages } from "../data/studiosData";

export const Studios = () => {
  const studioData = StudioImages;
  return (
    <View styles={styles.studiosContainer}>
      {studioData.map((data) => {
        <View key={data.id} style={styles.studios}>
          {/* <Image source={{ uri: data.img }} />; */}
          <Text style={{ color: "white" }}>{data.id}</Text>
        </View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  studiosContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  studios: {
    height: 140,
    width: 140,
    backgroundColor: "white",
  },
});
