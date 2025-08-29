import { ScrollView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./ModuleStyles";

const API_KEY = "YOUR_API_KEY";

export default function SearchedLocation() {
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const fetchCurrent = async (name) => {
    if (!name) return;

    // TODO: Call weather app api to get weather info according to city
  };

  useEffect(() => {
    (async () => {
      // TODO:
    })();
  }, [value]);
  return (
    <ScrollView style={{ padding: 16 }}>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        placeholderTextColor="#888"
        // TODO: Finish this TextInput
      />
      {/* // TODO: Use CurrentWeatherCard to show weathet info */}
    </ScrollView>
  );
}
