import React from "react";
<<<<<<< HEAD
import { ViewProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Img from "../../assets/imgTest.png";
import { Container, AvatarImg } from "./styles";
=======
import { ActivityIndicator, ViewProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Img from "../../assets/imgTest.png";
import { Container, AvatarImg, AvatarContainer } from "./styles";
import LoadSpinner from "../../assets/loadingSpinner.svg";
>>>>>>> ace9350... implementing comments

interface Props extends ViewProps {
  size: number;
  radius: number;
  avatarUrl: string;
}

export function Avatar({ size, radius, avatarUrl, ...rest }: Props) {
  return (
<<<<<<< HEAD
      
    <Container size={size} radius={radius} {...rest}>
        <AvatarImg source={{ uri: avatarUrl }} size={size} radius={radius} />
    </Container>
      
=======
    <Container size={size} radius={radius} {...rest}>
      <AvatarContainer size={size} radius={radius}>
        {avatarUrl ? (
          <AvatarImg source={{ uri: avatarUrl }} size={size} radius={radius} />
        ) : (
          <ActivityIndicator />
        )}
      </AvatarContainer>
    </Container>
>>>>>>> ace9350... implementing comments
  );
}
