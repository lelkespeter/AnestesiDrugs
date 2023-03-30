import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const LmItem = ({id, name, styrka, recept, dosimG, dosIµG, obs}) => {
  const w = 3;
  return (
    <Pressable>
      <View>
        <Text>{name}</Text>
        {styrka && styrka.length > 0 ? <Text>{styrka}</Text> : null}
        {recept && recept.length > 0 ? <Text>spädning: {recept}</Text> : null}

        {dosimG != null && dosimG !== "" ? (
          <Text>{(dosimG * w).toFixed(2)} mg</Text>
        ) : null}
        {dosIµG != null && dosIµG !== "" ? (
          <Text>{(dosIµG * w).toFixed(2)} mikrog</Text>
        ) : null}

        {obs && obs.length > 0 ? <Text>{obs}</Text> : null}
      </View>
    </Pressable>
  );
};

export default LmItem;

const styles = StyleSheet.create({});
