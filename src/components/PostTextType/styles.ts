import { BorderlessButton } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from "styled-components/native";
import { PostType } from "../../interfaces";
import constants from "expo-constants";

//TextType
export const Container = styled.View<PostType>`
  width: 100%;
  min-height: 300px;

  max-height: 100%;
  padding: 25px 0;
  border-radius: 36px;
  justify-content: center;
  padding-top: ${({ screenType }) =>
    screenType === "fullscreen" ? constants.statusBarHeight + 10 : 25}px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
 

  ${({ isRepost }) =>
    isRepost
      ? css`
          border: 2px solid ${({ theme }) => theme.COLORS.SUCCESS_500};
          border-radius: 36px;
        `
      : css`
          width: 100%;
        `}
`;
export const Header = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px; ;
`;
export const Content = styled(BorderlessButton)<PostType>`
  flex: 1;
top: -5px;
  height: 90%;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0 25px;
  margin-left: 10px;

  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          width: 85%;
        `
      : css`
          width: 90%;
        `}
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  text-align: left;

  font-size: 14px;
  
`;
export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  text-align: justify;

  font-size: 14px;
  
`;
