import {TextInput, StyleSheet, Text, View} from "react-native";
import React from "react";

const Input = ({label, style, textInputConfig}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    marginBottom: 12,
  },
  input: {
    backgroundColor: "green",
    borderRadius: 7,
    color: "white",
    fontSize: 17,
  },
});
