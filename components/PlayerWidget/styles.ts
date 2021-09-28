import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#151515",
    position: "absolute",
    bottom: 48,
    width: "100%",
    padding: 10,
    alignItems: 'center',
  },
  image: { width: 55, height: 55, marginRight: 15 },
  title: { color: "white", fontSize: 15 },
  artist: { color: "lightgray", fontSize: 11 },
  mainContainer: { width: "80%", justifyContent: "space-around", flexDirection: "row",},
  nameSongContainer: {flexDirection: "row",},
  buttons: {flexDirection: "row"},
});

export default styles;
