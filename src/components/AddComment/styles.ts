import styled, { css } from "styled-components/native";

interface Props {
  active?: boolean;
}

export const Container = styled.View`
  width: 100%;
  
`;
export const CommentContainer = styled.View<Props>`
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  border-radius: 19px;

  ${({ active, theme }) =>
    active &&
    css`
      border-radius: 19px;

      border-width: 2px;
      border-color: ${theme.COLORS.SUCCESS_900};
    `}
`;

export const AddCommentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput``;

export const AddCommentText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-size: 15px;

  margin-left: 17px;
`;

export const CommentsCountText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};

  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 14px;
`;
