import {StyleSheet, Text, View} from "react-native";
import React from "react";

import ListAllMediciner from "../components/ListAllMediciner";
import {LM} from "../constants/data";
const DrugsListScreen = () => {
  return <ListAllMediciner drugs={LM} />;
};

export default DrugsListScreen;

const styles = StyleSheet.create({});
