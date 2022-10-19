import React from "react";
import { ImageBackground, ImageBackgroundProps, ImageProps } from "react-native";
import Img from "../../assets/9x16.png";
import ImgA from "../../assets/imgTest.png";
import { Imagem } from "./styles";



export function ImageComponent({ ...rest }: ImageBackgroundProps) {
  return( <Imagem {...rest}  resizeMode="cover">

  </Imagem>)
}
