import { View, Text } from "react-native";
import React from "react";
import { styles } from "./CurrentWeatherCardStyles";

const CurrentWeatherCard = ({ weatherData }) => {
  if (!weatherData || weatherData.cod !== 200) return null;

  return (
    <View style={styles.container}>
      {/* // TODO: Design card component by using CurrentWeatherCardStyles */}
    </View>
  );
};

export default CurrentWeatherCard;
