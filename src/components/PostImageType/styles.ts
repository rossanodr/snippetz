import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import ExpoFastImage from "expo-fast-image";
import { BlurView, BlurViewProps } from "expo-blur";
import { PostType } from "../../interfaces";
import constants from "expo-constants";
<<<<<<< HEAD
=======
import { RectButton } from "react-native-gesture-handler";
>>>>>>> ace9350... implementing comments

interface Props extends BlurViewProps, PostType {
  active?: boolean;
}
<<<<<<< HEAD

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-items: center;
  width:100% ;
`;
export const Header = styled.View`
  position: absolute;
  width: 100%;

  margin-top: ${constants.statusBarHeight + 18}px;
`;

export const ImageWrapper = styled.View<Props>`
=======
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
>>>>>>> ace9350... implementing comments
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          height: 100%;
          max-height: 100%;
          width: 100%;
          overflow: hidden;
        `
      : css`
<<<<<<< HEAD
=======
          flex: 1;
>>>>>>> ace9350... implementing comments
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
<<<<<<< HEAD
export const Content = styled.View`
  justify-content: center;
  align-items: flex-start;
=======
export const Content = styled(RectButton)`
  align-self: center;
  justify-self: center;
  flex-wrap: wrap;

  width: 70%;
>>>>>>> ace9350... implementing comments

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
<<<<<<< HEAD
=======
  flex: 1;
  min-width:80px ;
  

>>>>>>> ace9350... implementing comments
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          padding: 5px;
          border-radius: 12px;
<<<<<<< HEAD
          width: 280px;
          flex-wrap: wrap;
          position: absolute;
          bottom: 15px;
          max-height: 150px;
=======

>>>>>>> ace9350... implementing comments
          overflow: hidden;
        `
      : css`
          padding: 5px;
<<<<<<< HEAD
          border-radius: 12px;
          width: 250px;
          flex-wrap: wrap;
          position: absolute;
          bottom: 15px;
          max-height: 150px;
          overflow: hidden;
=======
          margin-left:10px ;
          border-radius: 12px;
>>>>>>> ace9350... implementing comments
        `}
`;

export const Title = styled.Text<Props>`
<<<<<<< HEAD
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  text-shadow: 1px 1px 2px black;
=======
    font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  text-shadow: 1px 1px 2px black;
  flex-wrap: wrap;
>>>>>>> ace9350... implementing comments

  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 20px;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
<<<<<<< HEAD
          font-size: 20px;
        `
      : css`
          font-size: 18px;
=======
          font-size: 16px;
        `
      : css`
          font-size: 14px;
>>>>>>> ace9350... implementing comments
        `}
`;

export const SubTitle = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  text-shadow: 1px 1px 1px black;
<<<<<<< HEAD

  color: ${({ theme }) => theme.COLORS.SHAPE};

  width: 280px;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          font-size: 16px;
        `
      : css`
          font-size: 14px;
        `}
=======
  text-align: justify;

  color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-wrap: wrap;
  font-size: 14px;

 
>>>>>>> ace9350... implementing comments
`;
