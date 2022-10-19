import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { BlurViewProps } from "expo-blur/build/BlurView.types";
import { ButtonBlur } from "../ButtonBlur";
import { PostType } from "../../interfaces";


export function FloatingMenu({ screenType = "fullscreen", postType }: PostType) {
  const { COLORS } = useTheme();
  //States

  //Functions

  return (
    <Container>
      {screenType === "fullscreen" ? (
        <Button>
          <Entypo
            name="message"
            size={screenType === "fullscreen" ? 24 : 20}
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      ) : (
        <Button>
          <Entypo
            name="slideshare"
            size={ 20}
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      )}

      <ButtonBlur
        iconName="loop"
        iconSize={screenType === "fullscreen" ? 24 : 20}
        height={screenType === "fullscreen" ? 70 : 50}
        width={screenType === "fullscreen" ? 56 : 46}
        screenType={screenType}
        postType={postType}
        iconColorActive={COLORS.SHAPE}
        iconColorInactive={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
        backgroundColorActive={ COLORS.SUCCESS_900}
        

      />

      <ButtonBlur
        iconName="heart-outlined"
        numberOfLikes="4.2k"
        iconSize={screenType === "fullscreen" ? 24 : 20}
        height={screenType === "fullscreen" ? 70 : 50}
        width={screenType === "fullscreen" ? 56 : 46}
        screenType={screenType}
        postType={postType}
        iconColorActive={postType === "image" ? COLORS.SHAPE : COLORS.SHAPE}
        iconColorInactive={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
        backgroundColorActive={ COLORS.ALERT_900}

      />
    </Container>
  );
}
