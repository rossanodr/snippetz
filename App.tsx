import * as SplashScreen from "expo-splash-screen";
<<<<<<< HEAD
=======


>>>>>>> ace9350... implementing comments
import React from "react";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./src/hooks/auth";
import { PhotoScreen } from "./src/screens/PhotoScreen";
import { Routes } from "./src/routes";
import { Home } from "./src/screens/Home";
<<<<<<< HEAD
=======
import { SafeAreaProvider } from 'react-native-safe-area-context';
>>>>>>> ace9350... implementing comments

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();

  return (
<<<<<<< HEAD
=======
    <SafeAreaProvider>

>>>>>>> ace9350... implementing comments
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <AuthProvider>
<<<<<<< HEAD
          <Routes />
          {/* <Home /> */}
          {/* <PhotoScreen /> */}
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
=======
          
            <Routes />
          
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
    </SafeAreaProvider>
>>>>>>> ace9350... implementing comments
  );
}
