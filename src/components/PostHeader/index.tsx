import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  AvatarButton,
  Button,
  Container,
  SaveContainer,
  Name,
  TextContainer,
  Time,
} from "./styles";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "../Avatar";
import { ButtonBlur } from "../ButtonBlur";
import { PostType } from "../../interfaces";

interface Props extends PostType {
  name: string;
  time?: string;
  avatarUrl: string;
  showName?: boolean;
  showTime?: boolean;
  showButton?: boolean;
}

export function PostHeader({
  name,
  time,
  avatarUrl,
  screenType = "fullscreen",
  postType,
  isRepost = false,
  showName =true,
  showTime = true,
  showButton = true
}: Props) {
  const { COLORS } = useTheme();
  const [active, setActive] = useState(false);

  function handleSavePost() {
    setActive(!active);
  }

  return (
    <Container>
      <AvatarButton>
        <Avatar
          size={screenType === "fullscreen" ? 66 : 46}
          radius={screenType === "fullscreen" ? 23 : 16}
          avatarUrl={avatarUrl}
          style={{ zIndex: 1 }}
        />
        <TextContainer screenType={screenType}>
            {showName ?
          <Name screenType={screenType} postType={postType} isRepost={isRepost}>
            {name}
          </Name> : <Name screenType={screenType} postType={postType} isRepost={isRepost}></Name>
            }
          {showTime ?
          <Time screenType={screenType} postType={postType} isRepost={isRepost}>
          {time}
          </Time> : <Time screenType={screenType} postType={postType} isRepost={isRepost}></Time>
          }
        </TextContainer>
      </AvatarButton>
      {showButton &&
      <Button onPress={handleSavePost}>
        <ButtonBlur
          iconName="bookmark"
          iconSize={screenType === "fullscreen" ? 24 : 20}
          height={screenType === "fullscreen" ? 70 : 50}
          width={screenType === "fullscreen" ? 56 : 46}
          postType={postType}
          screenType={screenType}
          iconColorActive={COLORS.SHAPE}
        iconColorInactive={postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900}
        backgroundColorActive={COLORS.SUCCESS_900}
        />
      </Button>
      }
    </Container>
  );
}
