import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constants from "expo-constants";
import { PostType } from "../../interfaces";
import { RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View<PostType>`
  flex: 1;
  width: 100%;
  padding: 25px 0;
  border-radius: 36px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  padding-top: ${constants.statusBarHeight}px;
  
  /* padding-top: 
  ${({screenType}) => screenType === 'fullscreen' ? 
  (constants.statusBarHeight + 10) : 0}px; */
  
  
`;
export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px; 
  
`;

export const Content = styled.View`
  width: 100%;
`;

export const TextContent = styled.View`
  width: 100%;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
  
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  text-align: left;
line-height:15px ;
  font-size: ${RFValue(14)}px;;
  
`;

export const postBody = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  /* text-align:left; */
  font-size: ${RFValue(14)}px;;
  margin: 4px;
`;
export const ImageWrapper = styled.View`
  align-self: flex-start;
  width: 75%;
  height: 450px;
  border-radius: 39px;
  margin-left: 30px;
  overflow: hidden;
`;

export const RepostText = styled.View`
  width: 75%;

  margin-left: 25px;

  border-radius: 39px;
`;
export const RepostNavigationButton = styled(RectButton)``;
