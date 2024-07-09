import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "rgb(224, 230, 235);",
    margin: 10,
    borderRadius: 10,
    flex: 1,
  },
  imageContainer: {
    margin: 10,
    // flex:1
  },
  innerContainer: {
    padding: 5,
    flex:1
  },
  image: {
    height: Dimensions.get("window").height /4,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: "white",

  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color:"black"
    // flex:1

  },
  priceContainer: {
  },
  price: {
    fontStyle: "normal",
    textAlign: "center",
    fontWeight: "bold",

    // flex:1
  },
  stock: {
    color:"red",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
    marginTop:10

  },
});
