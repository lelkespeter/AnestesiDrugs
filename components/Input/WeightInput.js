import {StyleSheet, Button, TextInput, View} from "react-native";
import React, {useState} from "react";

const WeightInput = ({navigation}) => {
  const [enteredVikt, setEnteredVikt] = useState("");

  function weightCangeHandler(enteredText) {
    setEnteredVikt(enteredText);
  }
  const goToList = () => {
    navigation.navigate("CurrentDrugs", {enteredVikt: enteredVikt});
  };
  return (
    <View>
      <TextInput
        keyboardType="decimal-pad"
        placeholder="Weight i kg"
        value={+enteredVikt}
        onChangeText={weightCangeHandler}
      />

      <Button title="Submit" onPress={goToList} />
    </View>
  );
};

export default WeightInput;

const styles = StyleSheet.create({
  viktInput: {
    width: 66,
    justifyContent: "center",
  },
});
