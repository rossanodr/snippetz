import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type ContainerProps = {
  type: TypeProps;
};

export const ButtonContainer = styled(RectButton)<ContainerProps>`
  flex: 1;
  width: 90%;
  max-height: 56px;
  min-height: 56px;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
  
  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.TITLE : "transparent"};
`;

export const Container = styled.View<ContainerProps>`
  
 height: 100% ;
 width: 100% ;
  justify-content: center;
  align-items: center;
  border: 1px solid
   ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.TEXT_PRIMARY : theme.COLORS.TITLE};
`;
export const Title = styled.Text<ContainerProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  ${({ theme, type }) => css`
    color: ${type === "primary"
      ? theme.COLORS.TEXT_PRIMARY
      : theme.COLORS.TITLE};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TEXT_PRIMARY,
}))``;
