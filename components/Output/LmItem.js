import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

import {appStyles} from "../../constants/myStyles";

const LmItem = ({
  drugName,
  styrka,
  recept,
  dosimG,
  dosIµG,
  obs,
  enteredVikt,
}) => {
  const strength = styrka.charAt(styrka.length - 5);
  const numStrength = parseFloat(styrka);

  const w = +enteredVikt;
  return (
    <>
      <View style={styles.listContainer}>
        <View style={{flexDirection: "row"}}>
          <View>
            <Text style={{fontWeight: "bold", fontSize: 17}}>{drugName}</Text>
          </View>
          <View style={{paddingLeft: 7}}>
            <Text style={{fontSize: 17}}>{styrka}</Text>
          </View>
        </View>

        <View>
          {strength === "m" && dosimG !== 0 && dosIµG !== "" ? (
            <Text>
              dosen för {w} kg = {(dosIµG * w).toFixed(2)} µg{" "}
            </Text>
          ) : strength === "m" && dosimG !== 0 ? (
            <Text>
              dosen för {w} kg = {(dosimG * w).toFixed(2)} mg
            </Text>
          ) : strength === "µ" && dosIµG !== "" ? (
            <Text>
              dosen för {w} kg = {(dosIµG * w).toFixed(2)} µg{" "}
            </Text>
          ) : null}
        </View>

        <View>
          {strength === "m" && dosimG !== 0 && dosIµG !== "" ? (
            <Text>
              {" "}
              ge {((dosIµG * w) / (numStrength * 1000)).toFixed(2)} ml{" "}
              {drugName} {styrka}
            </Text>
          ) : strength === "m" && dosimG !== 0 ? (
            <Text>
              ge {((dosimG * w) / numStrength).toFixed(2)} ml {drugName}{" "}
              {styrka}
            </Text>
          ) : strength === "µ" && dosIµG !== "" ? (
            <Text>
              ge {((dosIµG * w) / numStrength).toFixed(2)} ml {drugName}{" "}
              {styrka}
            </Text>
          ) : null}
        </View>
        <View>
          {obs !== "" ? <Text style={{color: "red"}}>OBS: {obs}</Text> : null}
        </View>
        <View>{recept ? <Text>Blandning: {recept}</Text> : null}</View>
      </View>
    </>
  );
};

export default LmItem;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderWidth: 0.7,
    marginVertical: 11,
    marginHorizontal: 13,
    padding: 3,
  },
  obsText: {
    color: "red",
    fontFamily: "open-sans-bold",
    fontSize: 12,
  },
});
