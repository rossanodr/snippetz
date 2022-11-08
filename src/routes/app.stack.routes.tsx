import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { PhotoScreen } from "../screens/PhotoScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreatePost } from "../screens/CreatePost";
import { MyProfileScreen } from "../screens/MyProfileScreen";
import { AppTabRoutes } from "./app.tab.routes";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useHiddenTabs } from "../hooks/useHiddenTabs";
import { UserProfileScreen } from "../screens/UserProfileScreen";

const routesWithoutTabs = ["PostScreen", "PhotoScreen"];

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  useHiddenTabs(routesWithoutTabs, "FallbackRoute");

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="PhotoScreen" component={PhotoScreen} />
      <Screen name="PostScreen" component={PostScreen} />
      <Screen name="UserProfileScreen" component={UserProfileScreen} />
     
    </Navigator>
  );
}
