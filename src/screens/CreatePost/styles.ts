import { BlurView } from "expo-blur";
import { Dimensions, TextInputProps } from "react-native";
import { RectButton, TextInput } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends TextInputProps {
  active?: boolean;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  width: "97%",
  alignSelf: "center",
  justifySelf: "center",
  marginBottom: 10,
  flex: 1,
})`
  border-radius: 36px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;
export const Content = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
  border-radius: 36px;
  padding-bottom: ${constants.statusBarHeight}px;
`;
export const BackButtonAndPostButton = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 90%;
  padding-top: ${constants.statusBarHeight}px;
  margin-bottom: 15px;
  margin: 25px 25px;
`;

export const PostItButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.SUCCESS_900};
  border-radius: 30px;
`;
export const PostItText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: ${RFValue(14)}px;;
  padding: 5px 10px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  margin-left: 55px;

  flex-direction: row;
  
`;

export const TextBox = styled.View<Props>`
  align-items: center;
  justify-content: center;

  width: 90%;

  margin-top: -25px;
  padding-left: 55px;
  margin-bottom: 5px;
  border-radius: 20px;
  overflow: hidden;
`;

export const TitleInput = styled(TextInput).attrs(
  ({ ...rest }: TextInputProps) => ({
    multiline: false,
  })
)<TextInputProps>`
  width: 100%;
  padding-left: 5px;
  height: 30px;
  margin-top: -3px;

  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: ${RFValue(16)}px;
`;

export const BodyInput = styled(TextInput).attrs(({ ...rest }: Props) => ({
  width: "100%",

  maxHeight: "100%",
}))<TextInputProps>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: ${RFValue(16)}px;
`;

export const ImageWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

  aspect-ratio: 0.75;
  margin-bottom: 25px;
  margin-left: 45px;

  border-radius: 39px;

  overflow: hidden;
`;
export const CancelPhotoButtonView = styled(BlurView)`
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 30px;

  position: absolute;
  top: 20px;
  right: 20px;

  border-radius: 20px;
`;
export const ButtonClose = styled(RectButton)`
  border-radius: 20px;
`;
export const GalleryContainer = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 100px;
  flex-direction: row;
`;

export const ImagesThumbnail = styled.View`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;

  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.COLORS.SUCCESS_500};
`;

export const AddButton = styled.View`
  justify-content: center;
  align-items: center;

  background-color: transparent;

  height: 80px;
  width: 80px;
  border-radius: 28px;
`;

export const Add = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: rgba(248, 248, 248, 0.1);
  width: 100%;
  height: 100%;
`;
