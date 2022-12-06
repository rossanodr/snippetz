import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import ExpoFastImage from "expo-fast-image";
import { BlurView, BlurViewProps } from "expo-blur";
import { PostType } from "../../interfaces";
import constants from "expo-constants";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends BlurViewProps, PostType {
  active?: boolean;
}
export const SkeletonContainer = styled.View<PostType>`
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

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  position: absolute;

  top: ${constants.statusBarHeight + 18}px;
  width: 90%;
  height: 80px;
  align-self: center;
  justify-self: center;
`;

export const ImageWrapper = styled.View<Props>`
  align-self: center;
  justify-self: center;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          height: 100%;
          max-height: 100%;
          width: 100%;
          overflow: hidden;
        `
      : css`
          flex: 1;
          width: 100%;
          height: 450px;
          border-radius: 42px;
          overflow: hidden;
        `}
  ${({ isRepost }) =>
    isRepost
      ? css`
          border: 2px solid ${({ theme }) => theme.COLORS.SUCCESS_500};
          border-radius: 42px;
        `
      : css`
          width: 100%;
        `}
`;

export const Menu = styled.View`
  position: absolute;
  right: 28px;
  bottom: 55px;
`;
export const Content = styled(RectButton)`
  align-self: center;
  justify-self: center;
  flex-wrap: wrap;

  width: 70%;

  position: absolute;
  left: 37px;
  bottom: 55px;
`;

export const TextContent = styled(BlurView).attrs(
  ({ screenType, ...rest }: Props) => ({
    intensity: 50,
    tint: "default",
  })
)<Props>`
  flex: 1;
  min-width:80px ;
  

  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          padding: 5px;
          border-radius: 12px;
          overflow: hidden;
        `
      : css`
          padding: 5px;
          margin-left:10px ;
          border-radius: 12px;
        `}
`;

export const Title = styled.Text<Props>`
    font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  text-shadow: 1px 1px 2px black;
  flex-wrap: wrap;

  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(20)}px;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          font-size: ${RFValue(16)}px;
        `
      : css`
          font-size: ${RFValue(14)}px;;
        `}
`;

export const SubTitle = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  text-shadow: 1px 1px 1px black;
  text-align: justify;

  color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-wrap: wrap;
  font-size: ${RFValue(14)}px;;

 
`;
