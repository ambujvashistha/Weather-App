import { ScrollView, ActivityIndicator, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CurrentWeatherCard from "../components/current-weather-card/CurrentWeatherCard";
import { styles } from "./ModuleStyles";

const API_KEY = "YOUR_API_KEY";

export default function CurrentLocation() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }
  const fetchCurrent = async (lat, lon) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    )
      .then((res) => res.json)
      .then((data) => setWeatherData(data));
  };

  // useEffect(() => {
  //   async function loadData() {
  //     // TODO: Request for location permission
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     console.log(location);
  //     setLocation(location);
  //   }
  //   loadData();
  // }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView style={styles.scrollView}>
      <Button
        title="Ask for Permission"
        style={{ height: 20, width: 70, borderColor: "Black" }}
      />
    </ScrollView>
  );
}
