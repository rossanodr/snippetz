import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
<<<<<<< HEAD
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
=======
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  overflow: hidden;
`;

export const InputText = styled(TextInput)<Props>`
 
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-size: 14px;
  flex: 1;

  margin: 17px;
  padding: 2px 0;
>>>>>>> ace9350... implementing comments
`;

export const IconView = styled.View<Props>`
  justify-content: center;
  align-items: center;
<<<<<<< HEAD

  padding: 0 17px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
=======
  margin-right: 17px;
>>>>>>> ace9350... implementing comments
`;
