import { TouchableOpacity } from "react-native";
import { BlurViewProps } from "expo-blur/build/BlurView.types";
import { BlurView } from "expo-blur";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface Props extends BlurViewProps {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonBlur = styled(BlurView).attrs<Props>(({ active }) => ({
  intensity: active ? 70 : 0,
}))<Props>`
  border-radius: 28px;
`;

export const Button = styled(RectButton)`
  align-items: center;
  justify-content: center;

  height: 70px;
  width: 56px;
  border-radius: 28px;
  margin-bottom: 3px;
`;
