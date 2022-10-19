import { BlurView, BlurViewProps } from "expo-blur";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { PostType } from "../../interfaces";

interface Props extends BlurViewProps, PostType {
  active?: boolean;
}
export const Container = styled.View`
  flex:1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  max-height:100px ;
  
`;

export const AvatarButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  flex-direction: row;

  margin-left: 25px;
`;
export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  height: 53px;
  width: 53px;
  border-radius: 23px;
  margin-right: 20px;
`;

export const SaveContainer = styled(BlurView).attrs<Props>(({ active }) => ({
  intensity: active ? 50 : 0,
}))<Props>`
  height: 53px;
  width: 53px;
  border-radius: 23px;

  justify-content: center;
  align-items: center;
`;

export const AvatarContainer = styled.View``;

export const TextContainer = styled(BlurView).attrs(
  ({ screenType, ...rest }: Props) => ({
    intensity: 50,
    tint: "default",
  })
)<Props>`
  justify-content: center;
  align-items: baseline;
  z-index: 0;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          padding: 2px 15px;
          padding-left: 18px;
          margin-left: -15px;

          border-radius: 10px;
        `
      : css`
          padding: 2px 5px;
          padding-left: 15px;
          border-radius: 5px;
          margin-left: -10px;
        `}
`;

export const Name = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          font-size: 14px;
        `
      : css`
          font-size: 13px;
        `}

  ${({ postType }) =>
    postType === "image"
      ? css`
          color: ${({ theme }) => theme.COLORS.SHAPE};
          text-shadow: 1.5px 1px 3px black;
        `
      : css`
          color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
        `}

        ${({ isRepost, postType }) =>
    isRepost || postType !== "image"
      ? css`
          color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
          text-shadow: 0 0 0 black;
        `
      : css`
          color: ${({ theme }) => theme.COLORS.SHAPE};
          text-shadow: 1.5px 1px 3px black;
        `}
`;

export const Time = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};

  font-size: 12px;
  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          font-size: 12px;
          text-shadow: 1px 1px 2px black;
        `
      : css`
          font-size: 11px;
          text-shadow: 1px 2px 1px black;
        `}

  ${({ postType }) =>
    postType === "image"
      ? css`
          color: ${({ theme }) => theme.COLORS.SHAPE};
          text-shadow: 1.5px 1px 3px black;
        `
      : css`
          text-shadow: 0px 0px 0px black;
          color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
        `}
        

        ${({ isRepost, postType }) =>
    isRepost || postType !== "image"
      ? css`
          color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
          text-shadow: 0 0 0 black;
        `
      : css`
          color: ${({ theme }) => theme.COLORS.SHAPE};
          text-shadow: 1.5px 1px 3px black;
        `}
`;
