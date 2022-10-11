import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, ButtonBlur, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { BlurViewProps } from "expo-blur/build/BlurView.types";

interface Props extends BlurViewProps{

}
export function PhotoScreenMenu({ ...rest}: Props) {
  const { COLORS } = useTheme();
  //States
  const [active, setActive] = useState(false)

  function handleLikePost(){
    setActive(!active);
      }

  return (
    <Container>
      <Button>
        <Entypo name="message" size={24} color={COLORS.SHAPE} />
      </Button>
      <Button>
        <Entypo name="loop" size={24} color={COLORS.SHAPE} />
      </Button>
      <ButtonBlur active={active} >

      <Button  {...rest} onPress={handleLikePost}>
        <Entypo name="star" size={24} color={COLORS.SHAPE} />
      </Button>
      </ButtonBlur>

      {/* <Entypo name="star-outlined" size={24} color={COLORS.SHAPE} /> */}
    </Container>
  );
}
