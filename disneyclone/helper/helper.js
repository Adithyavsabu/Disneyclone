export const handleMovieItemPress = (item, navigation) => {
  navigation.navigate("MovieDetail", { movie: item });
};
