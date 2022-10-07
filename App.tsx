import * as SplashScreen from "expo-splash-screen";
import React from "react";

import {
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import theme from "./src/theme";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { SignIn } from "./src/screens/SignIn";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" translucent backgroundColor="transparent" />
        <SignIn />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
