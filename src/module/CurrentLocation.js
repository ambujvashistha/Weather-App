import { ScrollView, ActivityIndicator, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import CurrentWeatherCard from "../components/current-weather-card/CurrentWeatherCard";
import { styles } from "./ModuleStyles";

const API_KEY = "YOUR_API_KEY";

export default function CurrentLocation() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrent = async (lat, lon) => {
    // TODO: Call weather app api to get current weather info
  };

  useEffect(() => {
    async function loadData() {
      // TODO: Request for location permission
    }

    loadData();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView style={styles.scrollView}>
      <CurrentWeatherCard weatherData={weatherData} />
      <TextInput onChangeText={() => {}} style={styles.input} />
    </ScrollView>
  );
}
