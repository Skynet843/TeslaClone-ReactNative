import { StyleSheet,Dimensions,StatusBar } from "react-native";
console.log(Dimensions.get('window').height);
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('window').height+StatusBar.currentHeight
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  mtitle: {
    fontSize: 40,
    fontWeight: "600",
  },
  stitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subTitleCTA:{
    color:'black',
    textDecorationLine:'underline'
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  }
});

export default styles;
