import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    position: "absolute",
    bottom: 48,
    width: "100%",
  },
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between"
  },
  image: { width: 55, height: 55, marginRight: 15 },
  title: { color: "white", fontSize: 15 },
  artist: { color: "lightgray", fontSize: 11 },
  nameSongContainer: { flexDirection: "row", alignItems: "center", },
  buttons: { flexDirection: "row", alignItems: "center", },
  progress: { width: "100%", height: 2, backgroundColor: "white" },
});

export default styles;
