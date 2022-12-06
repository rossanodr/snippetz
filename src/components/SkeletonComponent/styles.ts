import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  width: 100%;
  min-height: 300px;

  max-height: 100%;
  padding: 25px 0;
  border-radius: 36px;
  justify-content: center;
 

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TERTIARY};
`;
