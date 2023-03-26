import {useCallback} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import CurrentDosesScreen from "./screens/CurrentDosesScreen";
import DrugsListScreen from "./screens/DrugsListScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "roboto-font": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{fontFamily: "roboto-bold", fontSize: 30}}>Roboto Bold</Text>
      <Text style={{fontSize: 30}}>Platform Default</Text>
      <Text style={{fontFamily: "roboto-font", fontSize: 30}}>Roboto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
