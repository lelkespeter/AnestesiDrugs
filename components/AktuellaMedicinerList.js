import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";
import LmItem from "./LmItem";

const AktuellaMedicinerList = ({drugs}) => {
  function renderMedicinItem(itemData) {
    return <LmItem {...itemData.item} />;
  }
  return (
    <FlatList
      data={drugs}
      keyExtractor={(item) => item.id}
      renderItem={renderMedicinItem}
    />
  );
};

export default AktuellaMedicinerList;

const styles = StyleSheet.create({});
