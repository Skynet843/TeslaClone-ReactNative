import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton/index";

const CarItem = (props) => {
  console.log(props.car);
  const { image, tagline, name, taglineCTA }=props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.mtitle}>{name}</Text>
        <Text style={styles.stitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing inventory"}
          onPress={() => {
            console.warn("Existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
