import { BlurView, BlurViewProps } from 'expo-blur';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

interface Props extends BlurViewProps {
  active?: boolean;
}
export const Container = styled.View`
  flex: 1;
  width: 100%;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 15}px;
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
  margin-right: 25px;
 
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

export const TextContainer = styled.View`
  justify-content: center;
  align-items: baseline;
  margin-left: 16px ;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 14px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 12px;
`;
