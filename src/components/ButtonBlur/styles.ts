import { BlurView } from "expo-blur";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { PostType } from "../../interfaces";

interface Props {
  height: number;
  width: number;
}
interface TitleProps extends PostType {
  active?: boolean;
}

export const Container = styled(BlurView)`
  border-radius: 30px;
`;
export const Button = styled(RectButton)<Props>`
  align-items: center;
  justify-content: center;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: 28px;
  margin-bottom: 3px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme, postType}) =>
    postType === "image" ? theme.COLORS.SHAPE : theme.COLORS.SUCCESS_900};
  font-size: ${RFValue(12)}px;
  margin-top: 4px;
`;
