import {StyleSheet, Text, View} from "react-native";
import React from "react";

const TestListItem = ({drugName, styrka, recept, dosimG, dosIµG, obs}) => {
  //strength is in mg/ml or mikrog/ml
  //strength = parseFloat(styrka)
  //volume is ml the patient should get
  // amount is in mg or mikrog the dose he vill get
  // w is patient's body weight
  // volume = (amount * w)/strength

  const strength = styrka.charAt(styrka.length - 5);
  const numStrength = parseFloat(styrka);

  const w = 3;
  return (
    <>
      <View style={{flexDirection: "row"}}>
        <View>
          <Text>namn: {drugName}</Text>
        </View>
        <View style={{paddingLeft: 7}}>
          <Text>styrka: {styrka}</Text>
        </View>
      </View>

      <View>
        <Text>m/µ? : {strength}</Text>
      </View>
      <View>
        <Text>dosiMg : {dosimG * w}</Text>
      </View>
      <View>
        <Text>dosIµg : {dosIµG * w}</Text>
      </View>

      <View>
        {strength === "m" && dosimG !== 0 && dosIµG !== "" ? (
          <Text> ge {((dosIµG * w) / (numStrength * 1000)).toFixed(2)} ml</Text>
        ) : strength === "m" && dosimG !== 0 ? (
          <Text>ge {((dosimG * w) / numStrength).toFixed(2)} ml</Text>
        ) : strength === "µ" && dosIµG !== "" ? (
          <Text>ge {((dosIµG * w) / numStrength).toFixed(2)} ml</Text>
        ) : null}
      </View>
    </>
  );
};

export default TestListItem;

const styles = StyleSheet.create({});
