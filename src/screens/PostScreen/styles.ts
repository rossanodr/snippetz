import styled from "styled-components/native";
import constants from "expo-constants";
import { PostType } from "../../interfaces";

export const Container = styled.View<PostType>`
  flex: 1;
  
  justify-content: center;
  align-items: center;

  border-radius: ${({screenType, postType}) => screenType === 'fullscreen' && postType === 'image' ? 0 : 36 }px;
  
  
  overflow: hidden;
  

`;
export const Content = styled.ScrollView`
  width: 97%;
  height: 100%;
  
`;
