import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

import { Button, Container, Title } from "./styles";
import { BlurViewProps } from "expo-blur";
import { View } from "react-native";
import { PostType } from "../../interfaces";

interface Props extends PostType, BlurViewProps {
  iconName?: React.ComponentProps<typeof Entypo>["name"];
  iconSize?: number;
  height?: number;
  width?: number;
  numberOfLikes?: string;
  iconColorActive?: string;
  iconColorInactive?: string;
  backgroundColorActive?: string;
  backgroundColorInactive?: string;
}

export function ButtonBlur({
  iconName = "heart-outlined",
  iconSize = 24,
  height = 70,
  width = 56,
  numberOfLikes,
  postType,
  iconColorActive,
  iconColorInactive,
  backgroundColorActive,
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
    </Container>
  );
}
