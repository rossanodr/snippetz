<<<<<<< HEAD
import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

=======
import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
>>>>>>> ace9350... implementing comments
import { Button, Container, Title } from "./styles";
import { BlurViewProps } from "expo-blur";
import { View } from "react-native";
import { PostType } from "../../interfaces";

interface Props extends PostType, BlurViewProps {
<<<<<<< HEAD
  iconName?: React.ComponentProps<typeof Entypo>["name"];
  iconSize?: number;
  height?: number;
  width?: number;
  numberOfLikes?: string;
=======
  iconName?:
   
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconSize?: number;
  height?: number;
  width?: number;
  numberOfLikes?: number;
>>>>>>> ace9350... implementing comments
  iconColorActive?: string;
  iconColorInactive?: string;
  backgroundColorActive?: string;
  backgroundColorInactive?: string;
<<<<<<< HEAD
}

export function ButtonBlur({
  iconName = "heart-outlined",
  iconSize = 24,
  height = 70,
  width = 56,
=======
  buttonActivity?: boolean;
  handleButtonPress?: () => Promise<void>;
}

export function ButtonBlur({
  iconName = "heart-outline",
  iconSize = 22,
  height = 50,
  width = 46,
>>>>>>> ace9350... implementing comments
  numberOfLikes,
  postType,
  iconColorActive,
  iconColorInactive,
  backgroundColorActive,
<<<<<<< HEAD
  backgroundColorInactive = 'transparent',

  ...rest
}: Props) {
  const { COLORS } = useTheme();
  //States

  const [active, setActive] = useState(false);
  const [name, setName] = useState(iconName);
  //Functions
  function handleLikePost() {
    if (name === "heart-outlined") {
      setActive(!active);
      setName("heart");
    }
    if (name === "heart") {
      setActive(!active);
      setName("heart-outlined");
    } else {
      setActive(!active);
    }
  }

  return (
    <Container intensity={active ? 90 : 0} {...rest} tint="default">
      
      <View
        style={{
          backgroundColor: 
          active 
            ? backgroundColorActive
            : backgroundColorInactive ,
            
          borderRadius: name === "heart-outlined" ? 28 : 50,
        }}
      >
        <Button onPress={handleLikePost} height={height} width={width}>
          <Entypo
            name={name}
            size={iconSize}
            color={
              active
                ? iconColorActive
                : iconColorInactive
            }
          />
          {name === "heart" || name === "heart-outlined" ? (
            <Title postType={postType} active={active}>
              {numberOfLikes}
            </Title>
          ) : (
            <></>
          )}
        </Button>
      </View>
=======
  backgroundColorInactive = "transparent",
  buttonActivity,
  handleButtonPress,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  //States
  const [active, setActive] = useState(buttonActivity);
  const [name, setName] = useState(iconName);

  //Functions

  useEffect(() => {
    setActive(buttonActivity);
    setName(iconName);
  }, [buttonActivity]);

  return (
    <Container intensity={active ? 90 : 0} {...rest} tint="default">
      <Button onPress={handleButtonPress} height={height} width={width}>
      
          <MaterialCommunityIcons
            name={name}
            size={iconSize}
            color={active ? iconColorActive : iconColorInactive}
          />
       

        {name === "heart" || name === "heart-outline" ? (
          <Title postType={postType} active={active}>
            {numberOfLikes}
          </Title>
        ) : (
          <></>
        )}
      </Button>
>>>>>>> ace9350... implementing comments
    </Container>
  );
}
