import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function MovieDetailsScreen({ route }) {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details using the movieId and API key
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=a98600f8`);
      const data = await response.json();
      setMovieDetails(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  // Display loading indicator while fetching data
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieDetails.Title}</Text>
      <Text>Year: {movieDetails.Year}</Text>
      <Text>Genre: {movieDetails.Genre}</Text>
      <Text>Director: {movieDetails.Director}</Text>
      <Text>Actors: {movieDetails.Actors}</Text>
      <Text>Plot: {movieDetails.Plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});