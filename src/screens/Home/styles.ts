import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 36px;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const HeaderContainer = styled.View`
  align-self: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Feed = styled.View`
  width: 100%;
`;

export const GoToPostButton = styled(RectButton)`
  width: 97%;

  align-self: center;

  border-radius: 39px;
`;
