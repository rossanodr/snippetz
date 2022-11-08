import { useRoute } from "@react-navigation/native";
import React from "react";
import { ImageComponent } from "../../components/ImageComponent";

import { PostImageType } from "../../components/PostImageType";
import { Container } from "./styles";

interface Params {
  source: string;
}
export function PhotoScreen() {
  const route = useRoute();
  const { source } = route.params as Params;
  return (
    <Container>
      <ImageComponent source={{uri: source}}></ImageComponent>
    </Container>
  );
}
