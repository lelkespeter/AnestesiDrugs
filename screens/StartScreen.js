import {StyleSheet, Text, View} from "react-native";
import React from "react";
import Button from "../UI/Button";
import WeightInput from "../components/Input/WeightInput";

const StartScreen = () => {
  return (
    <View style={{marginVertical: 22}}>
      <WeightInput />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
