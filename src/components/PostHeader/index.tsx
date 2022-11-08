import React, { useState } from "react";
import {
  AvatarButton,
  Button,
  Container,
  Name,
  TextContainer,
  Time,
} from "./styles";
import { useTheme } from "styled-components/native";
import { Avatar } from "../Avatar";
import { ButtonBlur } from "../ButtonBlur";
import { PostType } from "../../interfaces";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";

interface Props extends PostType {
  showName?: boolean;
  showTime?: boolean;
  showButton?: boolean;
  postTimeStamp: string;
  repostTimeStamp?: string;
  name: string;
  avatarUrl: string;
  userId?: string;

  handleSavePost: () => Promise<void>;
  buttonActivity?: boolean;
}

export function PostHeader({
  name,
  userId,
  avatarUrl,
  screenType = "fullscreen",
  postTimeStamp,
  repostTimeStamp,
  postType,
  isRepost = false,
  showName = true,
  showTime = true,
  showButton = true,
  handleSavePost,
  buttonActivity
}: Props) {
  const { user } = useAuth();
  const { COLORS } = useTheme();
  const [active, setActive] = useState(false);
  const navigation = useTypeNavigation();
 



  function handleGoToUser() {
    if (userId === user.id) {
      navigation.navigate("MyProfileScreen");
    } else {
      navigation.navigate("UserProfileScreen", {
        userId,
      });
    }
  }

  return (
    <Container>
      <AvatarButton onPress={handleGoToUser}>
        <Avatar
          size={screenType === "fullscreen" ? 46 : 36}
          radius={screenType === "fullscreen" ? 16 : 12}
          avatarUrl={avatarUrl}
          style={{ zIndex: 1 }}
        />
        <TextContainer screenType={screenType}>
          {showName ? (
            <Name
              screenType={screenType}
              postType={postType}
              isRepost={isRepost}
            >
              {name}
            </Name>
          ) : (
            <></>
          )} 
          {showTime ? (
            <Time
              screenType={screenType}
              postType={postType}
              isRepost={isRepost}
            >
              {isRepost ? repostTimeStamp : postTimeStamp}
            </Time>
          ) : (
            <></>
          )}
        </TextContainer>
      </AvatarButton>
      {showButton && (
        <Button onPress={handleSavePost}>
          <ButtonBlur
            iconName={buttonActivity ? 'bookmark-minus' : 'bookmark-check-outline'}
            iconSize={screenType === "fullscreen" ? 18 : 16}
            height={screenType === "fullscreen" ? 50 : 40}
            width={screenType === "fullscreen" ? 56 : 46}
            postType={postType}
            screenType={screenType}
            iconColorActive={COLORS.SUCCESS_900}
            iconColorInactive={
              postType === "image" ? COLORS.SHAPE : COLORS.SUCCESS_900
            }
            backgroundColorActive={COLORS.SUCCESS_900}
            buttonActivity={buttonActivity}
            handleButtonPress={handleSavePost} 

          />
        </Button>
      )}
    </Container>
  );
}
