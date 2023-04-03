import {StyleSheet, FlatList, Text, View} from "react-native";
import React from "react";

import TestListItem from "./TestListItem";

const TestCurrentMedications = ({drugs}) => {
  function renderMedicinItem(itemData) {
    return <TestListItem {...itemData.item} />;
  }
  return (
    <FlatList
      data={drugs}
      keyExtractor={(item) => item.id}
      renderItem={renderMedicinItem}
    />
  );
};

export default TestCurrentMedications;

const styles = StyleSheet.create({});
