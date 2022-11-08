import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.stack.routes";
import auth from "@react-native-firebase/auth";
import { useAuth } from "../hooks/auth";

import { AppTabRoutes } from "./app.tab.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer >
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
