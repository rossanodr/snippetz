import styled from "styled-components/native";
<<<<<<< HEAD

export const Container = styled.View`
=======
import constants from "expo-constants";
import { PostType } from "../../interfaces";

export const Container = styled.View<PostType>`
>>>>>>> ace9350... implementing comments
  flex: 1;
  
  justify-content: center;
  align-items: center;

<<<<<<< HEAD
  border-radius: 36px;
  overflow: hidden;
=======
  border-radius: ${({screenType, postType}) => screenType === 'fullscreen' && postType === 'image' ? 0 : 36 }px;
  
  
  overflow: hidden;
  

>>>>>>> ace9350... implementing comments
`;
export const Content = styled.ScrollView`
  width: 97%;
  height: 100%;
  
`;
