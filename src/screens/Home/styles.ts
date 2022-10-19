import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  showsVerticalScrollIndicator: false,
})``;
export const HeaderContainer = styled.View`
  width: ${Dimensions.get("screen").width}px;
`;

export const Feed = styled.View`
  width: 97%;
`;

export const Post = styled.View`
  flex: 1;

  margin-bottom: 16px;

  /* background-color: black; */
`;
export const GoToPostButton = styled(RectButton)`
  /* background-color: yellow; */
  


  border-radius: 39px;
`;
