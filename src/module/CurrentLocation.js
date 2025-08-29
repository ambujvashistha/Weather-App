import { ScrollView, ActivityIndicator, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CurrentWeatherCard from "../components/current-weather-card/CurrentWeatherCard";
import { styles } from "./ModuleStyles";
import * as Location from "expo-location";

const API_KEY = "5881c4a70f1f474bc5289105d70aa1b5";

export default function CurrentLocation() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState([]);
  // (useState < Location.LocationObject) | (null > null);

  const fetchCurrent = async (lat, lon) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    data = await res.json();
    setWeatherData(data);
    console.log(data);
    setLoading((prev) => false);
  };

  useEffect(() => {
    async function loadData() {
      // TODO: Request for location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
      fetchCurrent(location.coords.latitude, location.coords.longitude);
    }
    loadData();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView style={styles.scrollView}>
      <CurrentWeatherCard weatherData={weatherData} />
    </ScrollView>
  );
}
