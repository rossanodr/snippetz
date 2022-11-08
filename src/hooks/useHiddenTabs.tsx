import { useLayoutEffect } from "react";
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

export function useHiddenTabs(
  hiddenTabRoutesArray: string[],
  fallbackRoute: string
) {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? fallbackRoute;

    navigation.setOptions(
      hiddenTabRoutesArray.includes(routeName)
        ? { tabBarStyle: { display: "none" } }
        : {
            tabBarStyle: {
              display: "flex",
              backgroundColor: "#FFFFFF",
              position: "absolute",

              bottom: 25,
              left: 30,

              borderRadius: 15,
              height: 70,
              width: "85%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            },
          }
    );
  }, [navigation, route]);
}
