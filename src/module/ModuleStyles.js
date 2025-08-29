import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  currentWeatherCard: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ff6b6b",
  },
  timeLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
  code: {
    marginTop: 4,
    fontSize: 16,
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 2,
    marginBottom: 10,
  },
  scrollViewContainer: {
    padding: 16,
  },
});

export { styles };
