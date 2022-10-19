import styled, { css } from "styled-components/native";
import { PostType } from "../../interfaces";

export const Container = styled.View<PostType>`
  width: 100%;
  max-height:100% ;
  padding: 25px 0;
  border-radius: 36px;
  justify-content: center;

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
  height:60px; ;
  `;
export const Content = styled.View<PostType>`
  flex: 1;

  height: 90%;

  justify-content: center;
  align-items: center;

  padding: 0 25px;

  ${({ screenType }) =>
    screenType === "fullscreen"
      ? css`
          width: 85%;
        `
      : css`
          width: 90%;
        `}
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  text-align: left;

  font-size: 14px;
  margin-top: 4px;
`;
