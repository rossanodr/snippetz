import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Add,
  AddButton,
  AvatarContent,
  AvatarName,
  AvatarsContainer,
  Container,
  Content,
  IconsContainer,
  LeftIcon,
  LeftIconContainer,
  MessageIcon,
  NotificationIcon,
  RightIconContainer,
} from "./styles";
import { Avatar } from "../Avatar";
import { View } from "react-native";
<<<<<<< HEAD

export function MainHeader() {
=======
import { useAuth } from "../../hooks/auth";

export function MainHeader() {
  const {signOut} = useAuth();

  function handleSignOut( ){
    signOut();
  }

>>>>>>> ace9350... implementing comments
  return (
    <Container>
      <Content>
        <IconsContainer>
<<<<<<< HEAD
          <LeftIconContainer>
=======
          <LeftIconContainer onPress={handleSignOut}>
>>>>>>> ace9350... implementing comments
            <LeftIcon>
              <MaterialCommunityIcons
                name="dots-grid"
                size={22}
                color="white"
              />
            </LeftIcon>
          </LeftIconContainer>
          <RightIconContainer>
            <NotificationIcon>
              <Ionicons name="notifications-outline" size={22} color="white" />
            </NotificationIcon>
            <MessageIcon>
              <Ionicons name="md-mail-outline" size={22} color="black" />
            </MessageIcon>
          </RightIconContainer>
        </IconsContainer>

        {/* <AvatarsContainer>
          <AvatarContent>
            <AddButton>
              <Add>
                <AntDesign name="plus" size={22} color="white" />
              </Add>
            </AddButton>
            <AvatarName>Add Story</AvatarName>
          </AvatarContent>
          <AvatarContent>
            <Avatar
              size={68}
              radius={28}
              avatarUrl="http://www.github.com/rossanodr.png"
            />
            <AvatarName>Rossano</AvatarName>
          </AvatarContent>
          <AvatarContent>
            <Avatar
              size={68}
              radius={28}
              avatarUrl="http://www.github.com/rossanodr.png"
            />
            <AvatarName>Rossano</AvatarName>
          </AvatarContent>
          <AvatarContent>
            <Avatar
              size={68}
              radius={28}
              avatarUrl="http://www.github.com/rossanodr.png"
            />
            <AvatarName>Rossano</AvatarName>
          </AvatarContent>
        </AvatarsContainer> */}
      </Content>
    </Container>
  );
}
