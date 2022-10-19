import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 25px 0;
  border-radius: 36px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  padding-top: ${constants.statusBarHeight + 10}px;
  
`;

export const Content = styled.View`
  width: 100%;
 

  justify-content: center;
  align-items: flex-start;
  margin: 10px;

  
`;
export const TextContent = styled.View`
 
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  margin-bottom:10px ;
  
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  /* text-align:left; */
  font-size: 14px;
  margin: 4px;
`;
export const RepostImage = styled.View`
  flex: 1;
  width: 75%;

  margin-left: 25px;
  overflow: hidden;

  border-radius: 36px;
`;
export const RepostText = styled.View`
  width: 75%;
  
  margin-left: 25px;


  border-radius: 36px;
  background-color: green;
`;

export const RepostNavigationButton = styled(RectButton)``;
