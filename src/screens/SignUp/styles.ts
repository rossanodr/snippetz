import { RectButton } from "react-native-gesture-handler";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";



export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND} ;

 
  
`;
export const Content = styled.View`
 align-self: flex-start;
 margin-bottom: 10px ;
  
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
  font-size: 12px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  margin-left: 18px;
  align-self: flex-start;

  ${({ theme }) => css`
 font-family: ${theme.FONTS.TITLE}
 color: ${theme.COLORS.TEXT_PRIMARY}
 `}
`;


