import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {alignItems: "center", padding: 20},
    image: {width: 150, height: 150, margin: 15 },
    name:{color: "white", fontSize: 35, fontWeight: "bold"},
    creatorContainer: {flexDirection: "row" },
    creator: {color: "lightgray", margin: 2, fontSize: 10, letterSpacing: 2.0},
    likes: {color: "lightgray", margin: 2, fontSize: 10, letterSpacing: 2.0},
    button: {backgroundColor: "#1ed760", padding: 17, borderRadius: 45, width: 60, alignItems: "center", marginTop: 10}
});

export default styles;