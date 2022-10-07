import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type TypeProps = "primary" | "secondary";

type Props = {
  type: TypeProps;
};

export const Container = styled(TextInput).attrs<Props>(({ theme, type }) => ({
  placeholderTextColor:
    type === "primary" ? theme.COLORS.TEXT_PRIMARY : theme.COLORS.TEXT_LIGHT,
}))<Props>`
  width: 90%;
  height: 56px;
  background-color: transparent;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};

  font-size: 14px;
  padding: 7px 0;

  margin-bottom: 16px;

  ${({ theme, type }) => css`
    font-family: ${theme.FONTS.TEXT};

    color: ${type === "primary"
      ? theme.COLORS.TEXT_PRIMARY
      : theme.COLORS.TEXT_LIGHT};
  `}
`;
