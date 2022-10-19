import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";
import ExpoFastImage from "expo-fast-image";
import { BlurView, BlurViewProps } from "expo-blur";
import { PostType } from "../../interfaces";
import constants from "expo-constants";

interface Props extends BlurViewProps, PostType {
  active?: boolean;
}

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
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          height: 100%;
          max-height: 100%;
          width: 100%;
          overflow: hidden;
        `
      : css`
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
export const Content = styled.View`
  justify-content: center;
  align-items: flex-start;

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
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          padding: 5px;
          border-radius: 12px;
          width: 280px;
          flex-wrap: wrap;
          position: absolute;
          bottom: 15px;
          max-height: 150px;
          overflow: hidden;
        `
      : css`
          padding: 5px;
          border-radius: 12px;
          width: 250px;
          flex-wrap: wrap;
          position: absolute;
          bottom: 15px;
          max-height: 150px;
          overflow: hidden;
        `}
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  text-shadow: 1px 1px 2px black;

  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 20px;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          font-size: 20px;
        `
      : css`
          font-size: 18px;
        `}
`;

export const SubTitle = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  text-shadow: 1px 1px 1px black;

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
`;
