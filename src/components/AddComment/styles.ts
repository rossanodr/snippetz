import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface Props {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;
export const CommentContainer = styled.View<Props>`
  width: 100%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  border-radius: 36px;

  ${({ active, theme }) =>
    active &&
    css`
      border-radius: 36px;

      border-width: 2px;
      border-color: ${theme.COLORS.SUCCESS_900};
    `}
`;

export const CommentsCountText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  padding: 0 25px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: ${RFValue(14)}px;;
`;
