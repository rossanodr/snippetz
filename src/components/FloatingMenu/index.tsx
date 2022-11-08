import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button, Container } from "./styles";
import { useTheme } from "styled-components/native";
import { BlurViewProps } from "expo-blur/build/BlurView.types";
import { ButtonBlur } from "../ButtonBlur";
import { PostType } from "../../interfaces";

<<<<<<< HEAD

export function FloatingMenu({ screenType = "fullscreen", postType }: PostType) {
=======
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
>>>>>>> ace9350... implementing comments
  const { COLORS } = useTheme();
  //States

  //Functions

  return (
    <Container>
      {screenType === "fullscreen" ? (
        <Button>
          <Entypo
            name="message"
<<<<<<< HEAD
            size={screenType === "fullscreen" ? 24 : 20}
=======
            size={screenType === "fullscreen" ? 18 : 16}
>>>>>>> ace9350... implementing comments
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      ) : (
        <Button>
          <Entypo
            name="slideshare"
<<<<<<< HEAD
            size={ 20}
=======
            size={16}
>>>>>>> ace9350... implementing comments
            color={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
          />
        </Button>
      )}
<<<<<<< HEAD

      <ButtonBlur
        iconName="loop"
        iconSize={screenType === "fullscreen" ? 24 : 20}
        height={screenType === "fullscreen" ? 70 : 50}
=======
      
      {/* RT button */}
      <ButtonBlur
        iconName="reload"
        iconSize={screenType === "fullscreen" ? 18 : 16}
        height={screenType === "fullscreen" ? 50 : 40}
>>>>>>> ace9350... implementing comments
        width={screenType === "fullscreen" ? 56 : 46}
        screenType={screenType}
        postType={postType}
        iconColorActive={COLORS.SHAPE}
<<<<<<< HEAD
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

=======
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
>>>>>>> ace9350... implementing comments
      />
    </Container>
  );
}
