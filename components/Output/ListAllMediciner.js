import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

import {appStyles} from "../../constants/myStyles";

const ListAllMediciner = ({drugs}) => {
  function renderDrugsItem({item}) {
    return (
      <View style={appStyles.ListContainer}>
        <View style={appStyles.itemContainer}>
          <Text style={appStyles.textNamn}>{item.name}</Text>
          <View style={appStyles.styrka}>
            <Text style={appStyles.text}>{item.styrka}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <FlatList
      data={drugs}
      renderItem={renderDrugsItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListAllMediciner;
