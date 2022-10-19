import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  
`;

export const InputText = styled(TextInput)<Props>`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  height: 90%;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-size: 14px;

  margin-left: 17px;
  padding: 2px 0;

  ${({ isFocused }) =>
    isFocused &&
    css`
      width: 250px;
    `}
`;

export const IconView = styled.View<Props>`
  justify-content: center;
  align-items: center;

  padding: 0 17px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
`;
