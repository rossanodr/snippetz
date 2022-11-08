import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import constants from "expo-constants";
<<<<<<< HEAD

export const Container = styled.View`
=======
import { PostType } from "../../interfaces";


export const Container = styled.View<PostType>`
>>>>>>> ace9350... implementing comments
  flex: 1;
  width: 100%;
  padding: 25px 0;
  border-radius: 36px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
<<<<<<< HEAD
  padding-top: ${constants.statusBarHeight + 10}px;
=======
  padding-top: ${constants.statusBarHeight}px;
  
  /* padding-top: 
  ${({screenType}) => screenType === 'fullscreen' ? 
  (constants.statusBarHeight + 10) : 0}px; */
  
  
`;
export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px; 
>>>>>>> ace9350... implementing comments
  
`;

export const Content = styled.View`
  width: 100%;
<<<<<<< HEAD
 

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
=======
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
  font-size: 14px;
  
`;

export const postBody = styled.Text`
>>>>>>> ace9350... implementing comments
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  /* text-align:left; */
  font-size: 14px;
  margin: 4px;
`;
<<<<<<< HEAD
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

=======
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
>>>>>>> ace9350... implementing comments
export const RepostNavigationButton = styled(RectButton)``;
