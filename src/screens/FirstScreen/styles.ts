import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT_BOLD};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 20px;
`;
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TITLE};
  font-size: 16px;

  margin-bottom: 60px;
`;
export const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 25px;
`;
