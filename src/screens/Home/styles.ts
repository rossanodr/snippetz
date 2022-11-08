import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
<<<<<<< HEAD
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
  


=======
  width: 100%;
  border-radius: 36px;

  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const HeaderContainer = styled.View`
  align-self: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Feed = styled.View`
  width: 100%;
`;


export const GoToPostButton = styled(RectButton)`
  width: 97%;
  

  align-self: center;

margin-bottom: 16px;
>>>>>>> ace9350... implementing comments
  border-radius: 39px;
`;
