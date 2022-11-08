import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { BlurViewProps } from "expo-blur/build/BlurView.types";
import { ButtonBlur } from "../ButtonBlur";
import { PostType } from "../../interfaces";

interface Props extends PostType {
  numberOfLikes?: number;
  handleButtonPress?: () => Promise<void>;
  buttonActivity?: boolean;
}
export function FloatingMenu({
  screenType = "fullscreen",
  postType,
  numberOfLikes,
  buttonActivity,
  handleButtonPress,
}: Props) {
  const { COLORS } = useTheme();
  //States

  //Functions

  return (
    <Container>
      {screenType === "fullscreen" ? (
        <Button>
          <Entypo
            name="message"
            size={screenType === "fullscreen" ? 18 : 16}
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      ) : (
        <Button>
          <Entypo
            name="slideshare"
            size={16}
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      )}
      
      {/* RT button */}
      <ButtonBlur
        iconName="reload"
        iconSize={screenType === "fullscreen" ? 18 : 16}
        height={screenType === "fullscreen" ? 50 : 40}
        width={screenType === "fullscreen" ? 56 : 46}
        screenType={screenType}
        postType={postType}
        iconColorActive={COLORS.SHAPE}
        iconColorInactive={
          postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900
        }
        backgroundColorActive={COLORS.SUCCESS_900}
      />

      {/* //LikeButton */}
      <ButtonBlur
        iconName={buttonActivity ? "heart" : "heart-outline"}
        numberOfLikes={numberOfLikes}
        iconSize={screenType === "fullscreen" ? 18 : 16}
        height={screenType === "fullscreen" ? 60 : 50}
        width={screenType === "fullscreen" ? 56 : 46}
        screenType={screenType}
        postType={postType}
        iconColorActive={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
        iconColorInactive={
          postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900
        }
        backgroundColorActive={COLORS.ALERT_900}
        handleButtonPress={handleButtonPress}
        buttonActivity={buttonActivity}
      />
    </Container>
  );
}
