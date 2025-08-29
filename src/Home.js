import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import Badge from "./components/badge/Badge";
import CurrentLocation from "./module/CurrentLocation";
import { styles } from "./HomeStyles";
import SearchedLocation from "./module/SearchedLocation";

// ? Top badge items which will help us to conditionally render top menu items
const BADGE_ITEM = [
  {
    id: 0,
    title: "Current Location",
    color: "#235789",
  },
  {
    id: 1,
    title: "Search Location",
    color: "#C1292E",
  },
];

export default function Home() {
  const [whichScreen, setWhichScreen] = useState(1);

  const onPress = () => {
    // TODO
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.badgeContainer}>
        {BADGE_ITEM.map((item) => {
          return (
            <Badge
              key={item.id}
              title={item.title}
              id={item.id}
              onPress={() => {
                // TODO
              }}
            />
          );
        })}
      </View>
      {/* // TODO : Conditionally render components for fetching current location & searched weather. */}
    </SafeAreaView>
  );
}
