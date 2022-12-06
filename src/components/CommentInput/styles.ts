import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import styled, { css } from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
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
  font-size: ${RFValue(14)}px;;
  flex: 1;

  margin: 17px;
  padding: 2px 0;
`;

export const IconView = styled.View<Props>`
  justify-content: center;
  align-items: center;
  margin-right: 17px;
`;
