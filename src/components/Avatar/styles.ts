import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

interface Props {
  size: number;
  radius: number;
}

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))<Props>`
  justify-content: center;
  align-items: center;
  height: ${({size}) =>size}px;
  width: ${({size}) =>size}px;
  border-radius: ${({radius}) =>radius}px;
<<<<<<< HEAD
=======

>>>>>>> ace9350... implementing comments
  
  
`;

<<<<<<< HEAD
export const AvatarImg = styled.Image<Props>`
  height: ${({size}) =>size -3}px;
  width: ${({size}) =>size-3}px;
  border-radius: ${({radius}) =>radius}px;
=======
export const AvatarContainer = styled.View<Props>`
justify-content: center;
  align-items: center;
  height: ${({size}) =>size -3}px;
  width: ${({size}) =>size-3}px;
  border-radius: ${({radius}) =>radius}px;
  background-color: ${({theme})=> theme.COLORS.SHAPE};

`;

export const AvatarImg = styled.Image<Props>`
  height: ${({size}) =>size -6}px;
  width: ${({size}) =>size-6}px;
  border-radius: ${({radius}) =>radius}px;
  background-color: ${({theme})=> theme.COLORS.TEXT_LIGHT}

>>>>>>> ace9350... implementing comments
  
`;
