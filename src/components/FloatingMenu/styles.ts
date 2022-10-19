import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
interface Props {
  screenType?: "fullscreen" | "small";
}

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 55px;
`;

export const Button = styled(RectButton)<Props>`
  align-items: center;
  justify-content: center;
  border-radius: 28px;
  
  ${({ screenType }) =>
    screenType === "fullscreen"
    ? css`
          margin-bottom: 3px;
          height: 70px;
          width: 56px;
        `
      : css`
          /* margin-bottom: -3px; */

          height: 42px;
          width: 46px;
        `}
`;
