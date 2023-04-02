import {StyleSheet, Text, View} from "react-native";
import React from "react";

const TestListItem = ({drugName, styrka, recept, dosimG, dosIµG, obs}) => {
  //strength is in mg/ml or mikrog/ml
  //strength = parseFloat(styrka)
  //volume is ml the patient should get
  // amount is in mg or mikrog the dose he vill get
  // w is patient's body weight
  // volume = (amount * w)/strength

  const strength = parseFloat(styrka);

  return (
    <View>
      <Text>TestListItem</Text>
    </View>
  );
};

export default TestListItem;

const styles = StyleSheet.create({});
