import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
`;

export const Menu = styled.View`
  position: absolute;
  right: 28px;
  bottom: 15%;
`;
export const Content = styled.View`
    justify-content: center;
  align-items: flex-start;

  position: absolute;
  left: 37px;
  bottom: 5%;
`;


export const TextContent = styled.View`
margin-bottom: 5px ;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 20px;
`;
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 16px;
`;

export const LikesContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
 
  flex-direction: row;
 margin-top: 5px ;
 
`;

export const FirstAvatarContainer = styled.View`
`;
export const AvatarContainer = styled.View`
  margin-left: -10px;
`;
