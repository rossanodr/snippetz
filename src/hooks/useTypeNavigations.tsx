import React from "react";
import {
  ParamListBase,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";

export function useTypeNavigation() {
  const RootStackParamList = useNavigation<NavigationProp<ParamListBase>>();
  return RootStackParamList;

}
