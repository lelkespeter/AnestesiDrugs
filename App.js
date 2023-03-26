import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import CurrentDosesScreen from "./screens/CurrentDosesScreen";
import DrugsListScreen from "./screens/DrugsListScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Doser</Text>
      <StatusBar style="auto" />
      <StartScreen />
      <CurrentDosesScreen />
      <DrugsListScreen />
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
