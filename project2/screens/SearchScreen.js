import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  // Fetch movies based on search query
  const fetchMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=a98600f8`);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search || []);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={fetchMovies} />
      {/* Display list of movies */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetails', { movieId: item.imdbID })}
          >
            <Text style={styles.movieTitle}>{item.Title} ({item.Year})</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  movieTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});
