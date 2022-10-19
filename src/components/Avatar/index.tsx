import React from "react";
import { ViewProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Img from "../../assets/imgTest.png";
import { Container, AvatarImg } from "./styles";

interface Props extends ViewProps {
  size: number;
  radius: number;
  avatarUrl: string;
}

export function Avatar({ size, radius, avatarUrl, ...rest }: Props) {
  return (
      
    <Container size={size} radius={radius} {...rest}>
        <AvatarImg source={{ uri: avatarUrl }} size={size} radius={radius} />
    </Container>
      
  );
}
