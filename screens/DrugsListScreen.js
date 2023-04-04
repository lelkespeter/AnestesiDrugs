import {StyleSheet, Text, View} from "react-native";
import React from "react";

import {appStyles} from "../constants/myStyles";

import ListAllMediciner from "../components/Output/ListAllMediciner";
import LM from "../constants/data";

const DrugsListScreen = () => {
  return (
    <View style={appStyles.container}>
      <ListAllMediciner drugs={LM} />
    </View>
  );
};

export default DrugsListScreen;
