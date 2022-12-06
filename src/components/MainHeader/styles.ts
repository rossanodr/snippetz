import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  margin-bottom: 16px; ;
`;

export const Content = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT_DARK,
}))`
  align-items: center;
  justify-content: space-evenly;
  height: ${constants.statusBarHeight + 100}px;
  max-height: 250px;
  border-bottom: 10px;
  border-bottom-left-radius: 39px;
  border-bottom-right-radius: 39px;
  padding: ${constants.statusBarHeight + 18}px 0;

  background-color: ${({ theme }) => theme.COLORS.DARK};
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LeftIconContainer = styled(RectButton)`
  align-items: center;
  justify-content: center;
  margin-left: 8%;
  border-radius: 28px;
`;

export const LeftIcon = styled.View`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
`;

export const RightIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 8%;
  flex-direction: row;
  height: 45px;
  width: 130px;
  border-radius: 28px;
  background-color: rgba(255, 255, 255, 0.06);
`;

export const NotificationIcon = styled(RectButton)`
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  height: 100%;

  width: 45%;
`;

export const MessageIcon = styled(RectButton)`
  align-items: center;
  justify-content: center;

  background-color: #ffffff;

  height: 100%;

  width: 53%;
  border-radius: 28px;
`;

export const AvatarsContainer = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-evenly;
  margin-top: 23px;
`;

export const AvatarContent = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AvatarName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(12)}px;
  margin-top: 5px;
`;

export const AddButton = styled.View`
  justify-content: center;
  align-items: center;
  background-color: transparent;

  border: 1px solid rgba(248, 248, 248, 0.1);
  height: 68px;
  width: 68px;
  border-radius: 28px;
`;

export const Add = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: rgba(248, 248, 248, 0.1);
  height: 80%;
  width: 80%;
  border-radius: 22px;
`;
