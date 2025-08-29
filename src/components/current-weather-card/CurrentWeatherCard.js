import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CurrentWeatherCardStyles";

const CurrentWeatherCard = ({ weatherData }) => {
  if (!weatherData || weatherData.cod !== 200) return null;
  const { name, main, weather } = weatherData;
  const temperatureCelsius = (main.temp - 273.15).toFixed(2);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subTitle}>{weather[0].main}</Text>
      <Text style={styles.tempText}>{temperatureCelsius}°C</Text>
    </View>
  );
};

export default CurrentWeatherCard;
