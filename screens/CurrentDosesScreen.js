import {StyleSheet, Text, View} from "react-native";
import React from "react";

import AktuellaMedicinerList from "../components/Output/AktuellaMedicinerList";
import LM from "../constants/data";

const CurrentDosesScreen = () => {
  return (
    <View>
      <AktuellaMedicinerList drugs={LM} />
    </View>
  );
};

export default CurrentDosesScreen;

const styles = StyleSheet.create({});
