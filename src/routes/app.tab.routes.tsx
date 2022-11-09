import React from "react";
import { StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components/native";
import { CreatePost } from "../screens/CreatePost";
import { MyProfileScreen } from "../screens/MyProfileScreen";
import { AppStackRoutes } from "./app.stack.routes";
import { TouchableOpacity } from "react-native-gesture-handler";

const { Screen, Navigator } = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.touchaBleOpacity}>
    <View style={styles.addView}>{children}</View>
  </TouchableOpacity>
);

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.SUCCESS_900,
        tabBarInactiveTintColor: theme.COLORS.TEXT_LIGHTER,
        tabBarHideOnKeyboard: true,

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          position: "absolute",

          bottom: 25,
          left: 30,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          width: "85%",
          ...styles.shadow,
        },
      }}
      defaultScreenOptions={{ tabBarStyle: { display: "flex" } }}
    >
      <Screen
        name="HomeScreen"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Feather name="home" size={24} color={color} />
            </View>
          ),
          tabBarStyle: {
            display: "flex",
            backgroundColor: "#FFFFFF",
            position: "absolute",

            bottom: 25,
            left: 30,
            elevation: 0,
            borderRadius: 15,
            height: 70,
            width: "85%",
            ...styles.shadow,
          },
        }}
      />

      <Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus" size={34} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} onPress={props.onPress} />
          ),
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Ionicons name="person-circle-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  touchaBleOpacity: {
    top: -30,
    justifyContent: "center",
    alignItems: "center",
  },

  addView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FF4B4B",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 35,
    elevation: 5,
  },
});
