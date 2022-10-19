import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { ButtonContainer, Container, Load, Title, TypeProps } from "./styles";

type Props = RectButtonProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
};

export function Button({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <ButtonContainer screenType={screenType} enabled={!isLoading} {...rest}>
      <Container screenType={screenType}>
        {isLoading ? <Load /> : <Title screenType={screenType}>{title}</Title>}
      </Container>
    </ButtonContainer>
  );
}
