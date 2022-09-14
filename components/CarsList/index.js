import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import CarItem from "../Caritem";

import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignments={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
