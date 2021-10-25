import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    width:'100%',
    position:'absolute',
    top:50,
    flexDirection:'row',
    justifyContent:"space-between",
    paddingHorizontal:20,
    alignItems:'center',
    zIndex:100
  },
  logo:{
    width:110,
    height:30,
    resizeMode:'contain'
  },
  menu:{
    width:30,
    height:30,
    resizeMode:'contain',
  }
});

export default styles;
