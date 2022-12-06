import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container } from "./styles";
import { Skeleton } from "@rneui/base";

export function SkeletonComponent() {
  return (
    <Container>
      <Skeleton
        circle
        animation="wave"
        LinearGradientComponent={LinearGradient}
        width={400}
        height={200}
      />
    </Container>
  );
}
