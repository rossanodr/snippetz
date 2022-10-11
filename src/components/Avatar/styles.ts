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
  
  
`;

export const AvatarImg = styled.Image<Props>`
  height: ${({size}) =>size -3}px;
  width: ${({size}) =>size-3}px;
  border-radius: ${({radius}) =>radius}px;
  
`;
