import styled from "styled-components/native";
import { PostType } from "../../interfaces";

export const Container = styled.View<PostType>`
  flex: 1;

  justify-content: center;
  align-items: center;

  border-radius: ${({ screenType, postType }) =>
    screenType === "fullscreen" && postType === "image" ? 0 : 36}px;

  overflow: hidden;
`;

export const Content = styled.View`
  width: 97%;
  align-self:center ;
  margin: 16px 0;
`;
