import { TouchableOpacityProps } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
interface Props extends TouchableOpacityProps {}
export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
  flex-direction: row;
  
  padding-left: 20px;
  height: 50px;
  max-height: 70px;
  border-radius: 19px;
 

  /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY}; */
  margin: 16px 0;
`;
export const AvatarContainer = styled.View``;

export const TextContainer = styled.View`
  flex: 1;
  padding: 0 14px;
  border-radius: 19px;
`;

export const NameAndCommentContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  margin-bottom: 6px;
`;
export const Name = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 14px;
  margin-right: 8px;
`;

export const Comment = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 14px;
`;

export const LabelContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT};
  font-size: 12px;
  margin-right: 18px;
`;
