import React, { useEffect, useState } from "react";
import { BlurViewProps } from "expo-blur";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

import { Button, Container, Title } from "./styles";
import { PostType } from "../../interfaces";

interface Props extends PostType, BlurViewProps {
  iconName?:
   
    | React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  iconSize?: number;
  height?: number;
  width?: number;
  numberOfLikes?: number;
  iconColorActive?: string;
  iconColorInactive?: string;
  backgroundColorActive?: string;
  backgroundColorInactive?: string;
  buttonActivity?: boolean;
  handleButtonPress?: () => Promise<void>;
}
/**
 * It's a button that changes color and icon when pressed.
 * @param {Props}  - Props) {
 * @returns A component that is a container with a button inside of it.
 */

export function ButtonBlur({
  iconName = "heart-outline",
  iconSize = 22,
  height = 50,
  width = 46,
  numberOfLikes,
  postType,
  iconColorActive,
  iconColorInactive,
  backgroundColorActive,
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
    </Container>
  );
}
