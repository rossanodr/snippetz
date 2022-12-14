import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";



export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND} ;
 
  justify-content: center;
  align-items: center;
  
  `;

export const Content = styled.View`
  width: 100%;
  position: absolute;
  top: ${constants.statusBarHeight + 15}px;
  
`;

export const Footer = styled.View`
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
`;
export const TextContainer = styled(RectButton)``;

export const TextLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-size: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  margin-bottom: 24px;
  margin-left: 18px;
  align-self: flex-start;

  ${({ theme }) => css`
 font-family: ${theme.FONTS.TITLE}
 color: ${theme.COLORS.TEXT_PRIMARY}
 `}
`;


