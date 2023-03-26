import {FlatList, StyleSheet, Text, View} from "react-native";
import React from "react";

const AllMedicineList = () => {
  return (
    <>
      <View>
        <Text>List of anesthetic drugs </Text>
      </View>
      <View>
        <FlatList />
      </View>
    </>
  );
};

export default AllMedicineList;

const styles = StyleSheet.create({});
