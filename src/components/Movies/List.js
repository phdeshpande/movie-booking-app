import React, { useEffect, useState } from "react";
import MovieCard from "./Card";
import { getScreenings } from "../../services";

const MoviesList = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      console.log('This will run after 3 sec!')
      screeningsData();
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, [setScreenings]);

  const screeningsData = () => {
    getScreenings()
      .then(response => {
        setScreenings(response.data);
      });
  };
  
  return (
    screenings.map((screen) => {
      return <MovieCard screen={screen} />
    })
  );
}

export default MoviesList;
