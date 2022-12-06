import React from "react";
import { ActivityIndicator, ViewProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Img from "../../assets/imgTest.png";
import { Container, AvatarImg, AvatarContainer } from "./styles";
import LoadSpinner from "../../assets/loadingSpinner.svg";

interface Props extends ViewProps {
  size: number;
  radius: number;
  avatarUrl: string;
  name: string
}

export function Avatar({ size, radius, avatarUrl, name, ...rest }: Props) {
  return (
    <Container size={size} radius={radius} {...rest}>
      <AvatarContainer size={size} radius={radius}>
        
          <AvatarImg source={{ uri: avatarUrl ? avatarUrl : `https://ui-avatars.com/api/?name=${name}}` }} size={size} radius={radius} />
       
      </AvatarContainer>
    </Container>
  );
}
