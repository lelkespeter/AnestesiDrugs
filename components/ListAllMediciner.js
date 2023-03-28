import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

function renderDrugsItem({itemData}) {
  return (
    <View style={styles.container}>
      <Text>{itemData.item.name}</Text>
      <Text>{itemData.item.styrka}</Text>
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingRight: 7,
  },
});
