import React from "react";
import { createContext, useState } from "react";

const FavouriteContext = createContext();
const FavouriteProvider = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const isFavorited = (movie) =>
    selectedMovies.find(
      (selectedMovie) => selectedMovie.imdbId === movie.imdbId
    );

  const handleFavouriteList = (movie) => {
    if (isFavorited(movie)) {
      setSelectedMovies(
        selectedMovies.filter(
          (selectedMovie) => selectedMovie.imdbId !== movie.imdbId
        )
      );
    } else {
      setSelectedMovies((prevSelectedMovies) => [...prevSelectedMovies, movie]);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        selectedMovies,
        setSelectedMovies,
        isFavorited,
        handleFavouriteList,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export { FavouriteProvider, FavouriteContext };
