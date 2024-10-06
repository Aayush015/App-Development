# Movie Browser

Welcome to the **Movie Browser** application! This mobile app allows users to search for movies from the Open Movie Database (OMDb) API and view additional information about selected movies. Built using React Native, this app offers a clean and intuitive interface for movie enthusiasts.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API Key](#api-key)
- [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features
- **Search Movies**: Users can search for movies by title.
- **View Details**: Click on a movie to view additional information such as genre, director, and plot.
- **Responsive Design**: The application is designed to work seamlessly on both iOS and Android devices.
- **Error Handling**: Provides feedback if no results are found or if the API key is invalid.

## Screenshots

Here are some screenshots of the app:

| Home Screen | Search Screen | Movie Details Screen |
|-------------|---------------|----------------------|
| ![Home Screen](pictures/home.png) | ![Search Screen](pictures/search.png) | ![Movie Details](pictures/movie_details.png) |

## Dependencies

The project uses the following libraries:
- **expo**: A framework for building React Native applications.
- **react**: A JavaScript library for building user interfaces.
- **react-native**: A framework for building native apps using React.
- **prop-types**: Runtime type checking for React props.
- **react-navigation**: A library for routing and navigation in React Native apps.
- **react-native-vector-icons**: A library for including icons in your React Native app.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-browser.git

2. **Navigate to project**: 
   ```bash
   cd movie-browser

3. ***Install dependencies***:
   ```bash
   npm install

4. ***Start***:
   ```bash
   npm start

## API key 
To run this project, please get your own API key and paste it to screens/MovieDetailsScreen.js and screens/SearchScreen.js