import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 14,
    color: "#7d7d7d",
    marginVertical: 5,
  },
  tempText: {
    fontSize: 48,
  },
});

export { styles };
