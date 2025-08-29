import { useState } from "react";
import { View, SafeAreaView, Button } from "react-native";
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
  const [whichScreen, setWhichScreen] = useState(true);

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
                setWhichScreen((prev) => !prev);
              }}
            />
          );
        })}
      </View>
      <CurrentLocation />
      {/* // TODO : Conditionally render components for fetching current location & searched weather. */}
    </SafeAreaView>
  );
}

// async function loadData() {
//   console.log("Load data");
//   // TODO: Request for location permission
//   let { status } = await Location.requestForegroundPermissionsAsync();
//   console.log("status", status);
//   if (status !== "granted") {
//     setErrorMsg("Permission to access location was denied");
//     return;
//   }

//   let location = await Location.getCurrentPositionAsync({});
//   console.log(location);
// }

// <Button
//   title="Ask for Permission"
//   style={{ height: 20, width: 70, borderColor: "Black" }}
//   onPress={loadData}
// />;
