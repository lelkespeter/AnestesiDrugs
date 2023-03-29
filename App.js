import {useCallback} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {FontAwesome5} from "@expo/vector-icons";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GlobalStyles} from "./constants/appColors";

import CurrentDosesScreen from "./screens/CurrentDosesScreen";
import DrugsListScreen from "./screens/DrugsListScreen";
import StartScreen from "./screens/StartScreen";
import IconButton from "./UI/IconButton";

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

  const BottomTabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function DrugsOverview() {
    return (
      <BottomTabs.Navigator
        screenOptions={({navigation}) => ({
          headerStyle: {backgroundColor: GlobalStyles.colors.primary800},
          headerTintColor: "white",
          tabBarStyle: {backgroundColor: GlobalStyles.colors.primary800},
          tabBarActiveTintColor: GlobalStyles.colors.neon,
          headerRight: ({tintColor}) => (
            <IconButton
              icon="accessibility-new"
              size={24}
              color={tintColor}
              onPress={() => {
                navigation.navigate("Start");
              }}
            />
          ),
        })}
      >
        <BottomTabs.Screen
          name="CurrentDrugs"
          component={CurrentDosesScreen}
          options={{
            title: "Dos/kg",
            tabBarLabel: "Doser",
            tabBarIcon: ({color, size}) => (
              <FontAwesome5
                name="hand-holding-medical"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <BottomTabs.Screen
          name="DrugsList"
          component={DrugsListScreen}
          options={{
            title: "List of drugs",
            tabBarLabel: "List",
            tabBarIcon: ({color, size}) => (
              <FontAwesome5
                name="briefcase-medical"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrogsOverview"
            component={DrugsOverview}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Start" component={StartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
