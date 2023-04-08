import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const Button = ({children}) => {
  function pressHandler() {
    console.log("Pressed!");
  }
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.btnInnerContainer, styles.pressed]
            : styles.btnInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: `#556b2f`}}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 7,
    overflow: "hidden",
    margin: 17,
  },
  btnInnerContainer: {
    // borderWidth: 1,
    backgroundColor: "green",

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.77,
  },
});
