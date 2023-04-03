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
  const numStyrka = parseFloat(styrka);

  return (
    <>
      <View style={{flexDirection: "row"}}>
        <View>
          <Text>{drugName}</Text>
        </View>
        <View style={{paddingLeft: 7}}>
          <Text>{styrka}</Text>
        </View>
      </View>
      <View>
        <Text>{strength}g</Text>
      </View>
      <View>
        <Text>{`${parseFloat(styrka)} ${strength}g/ml`}</Text>
      </View>
      <View>
        {strength === "m" && dosimG != 0 ? (
          <Text>{dosimG / numStyrka}ml</Text>
        ) : strength === "m" && dosIµG != 0 ? (
          <Text>{dosIµG / numStyrka} ml</Text>
        ) : (
          <Text>{dosIµG / numStyrka} ml</Text>
        )}
      </View>
    </>
  );
};

export default TestListItem;

const styles = StyleSheet.create({});
