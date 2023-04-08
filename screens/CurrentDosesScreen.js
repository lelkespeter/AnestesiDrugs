import {StyleSheet, Text, View} from "react-native";
import React from "react";

import AktuellaMedicinerList from "../components/Output/AktuellaMedicinerList";
import LM from "../constants/data";

const CurrentDosesScreen = ({route}) => {
  const {enteredVikt} = route.params;
  return (
    <View>
      <AktuellaMedicinerList drugs={LM} enteredVikt={enteredVikt} />
    </View>
  );
};

export default CurrentDosesScreen;

const styles = StyleSheet.create({});
