import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

function renderDrugsItem({itemData}) {
  return <Text>{itemData.item.name}</Text>;
}

const ListAllMediciner = ({drugs}) => {
  return (
    <FlatList
      data={drugs}
      renderItem={renderDrugsItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListAllMediciner;

const styles = StyleSheet.create({});
