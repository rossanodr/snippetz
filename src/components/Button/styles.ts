import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
  type: TypeProps;
};

export const ButtonContainer = styled(RectButton)<ContainerProps>`
  flex: 1;
  width: 90%;

  justify-content: center;
  align-items: center;
  
  max-height: 60px;
  min-height: 60px;
  margin-top: 10px;
  border-radius: 20px;
  
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.SHAPE : "transparent"};
`;

export const Container = styled.View<ContainerProps>`
 height: 100% ;
 width: 100% ;
 justify-content: center;
 align-items: center;
  
  border: 1px solid
   ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.DARK : theme.COLORS.SHAPE};

  border-radius: 20px;

`;
export const Title = styled.Text<ContainerProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  ${({ theme, type }) => css`
    color: ${type === "primary"
      ? theme.COLORS.TEXT_PRIMARY
      : theme.COLORS.SHAPE};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.DARK,
}))``;
