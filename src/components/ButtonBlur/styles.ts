<<<<<<< HEAD
import { BlurView } from 'expo-blur';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { PostType } from '../../interfaces';
=======
import { BlurView } from "expo-blur";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { PostType } from "../../interfaces";
>>>>>>> ace9350... implementing comments

interface Props {
  height: number;
  width: number;
}
interface TitleProps extends PostType {
  active?: boolean;
}

<<<<<<< HEAD
  export const Container = styled(BlurView)`
    border-radius: 30px;
  `;
  export const Button = styled(RectButton)<Props>`
  align-items: center;
  justify-content: center;

  height:${({height}) =>height}px;
  width:${({width})=> width}px;
=======
export const Container = styled(BlurView)`
  border-radius: 30px;
`;
export const Button = styled(RectButton)<Props>`
  align-items: center;
  justify-content: center;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
>>>>>>> ace9350... implementing comments
  border-radius: 28px;
  margin-bottom: 3px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
<<<<<<< HEAD
  color: ${({ theme, postType, active }) => postType === "image" || active ? theme.COLORS.SHAPE : theme.COLORS.SUCCESS_900};
  font-size: 14px;
  margin-top: 4px ;
`;
=======
  color: ${({ theme, postType}) =>
    postType === "image" ? theme.COLORS.SHAPE : theme.COLORS.SUCCESS_900};
  font-size: 12px;
  margin-top: 4px;
`;
>>>>>>> ace9350... implementing comments