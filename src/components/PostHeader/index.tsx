import React, { useState } from "react";
<<<<<<< HEAD
import { AntDesign, Ionicons } from "@expo/vector-icons";
=======
>>>>>>> ace9350... implementing comments
import {
  AvatarButton,
  Button,
  Container,
<<<<<<< HEAD
  SaveContainer,
=======
>>>>>>> ace9350... implementing comments
  Name,
  TextContainer,
  Time,
} from "./styles";
import { useTheme } from "styled-components/native";
<<<<<<< HEAD
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
=======
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
>>>>>>> ace9350... implementing comments
}

export function PostHeader({
  name,
<<<<<<< HEAD
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
=======
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
>>>>>>> ace9350... implementing comments
  }

  return (
    <Container>
<<<<<<< HEAD
      <AvatarButton>
        <Avatar
          size={screenType === "fullscreen" ? 66 : 46}
          radius={screenType === "fullscreen" ? 23 : 16}
=======
      <AvatarButton onPress={handleGoToUser}>
        <Avatar
          size={screenType === "fullscreen" ? 46 : 36}
          radius={screenType === "fullscreen" ? 16 : 12}
>>>>>>> ace9350... implementing comments
          avatarUrl={avatarUrl}
          style={{ zIndex: 1 }}
        />
        <TextContainer screenType={screenType}>
<<<<<<< HEAD
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
=======
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
>>>>>>> ace9350... implementing comments
    </Container>
  );
}
