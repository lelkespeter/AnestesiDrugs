import {StyleSheet, Text, View} from "react-native";
import React from "react";

import AktuellaMedicinerList from "../components/Output/AktuellaMedicinerList";
import LM from "../constants/data";
import TestCurrentMedications from "../components/TestCurrentMedications";

const CurrentDosesScreen = () => {
  return (
    <View>
      {/* <AktuellaMedicinerList drugs={LM} /> */}
      <TestCurrentMedications drugs={LM} />
    </View>
  );
};

export default CurrentDosesScreen;

const styles = StyleSheet.create({});
