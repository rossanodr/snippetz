import React, { useState } from "react";
import { PostHeader } from "../../components/PostHeader";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import {
  Add,
  AddButton,
  Container,
  Content,
  Header,
  GalleryContainer,
  ImagesThumbnail,
  ImageWrapper,
  TextBox,
  TextLabelInput,
  TitleInput,
  CancelPhotoButtonView,
  ButtonClose,
  BackButtonAndPostButton,
  PostItButton,
  PostItText,
} from "./styles";
import { useTheme } from "styled-components/native";
import { ImageComponent } from "../../components/ImageComponent";
import { Image } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Avatar } from "../../components/Avatar";
import Constants from 'expo-constants';

export function CreatePost() {
  const theme = useTheme();

  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [comment, setComment] = useState("");

  function handleInputFocus() {
    setIsActive(true);
  }

  function handleInputBlur() {
    setIsActive(false);
  }
  function handleAddPhoto() {
    setImage("https://thispersondoesnotexist.com/image");
  }

  function handleCancelPhoto() {
    setImage("");
  }
  return (
    <Container>
      <Content>
        <BackButtonAndPostButton>
          <BackButton />
          <PostItButton>
            <PostItText>Post It!</PostItText>
          </PostItButton>
        </BackButtonAndPostButton>
        <Header>
          <Avatar
            avatarUrl="http://www.github.com/rossanodr.png"
            size={45}
            radius={14}
          />
          <TitleInput placeholder="Title" />
        </Header>


        <TextBox active={isActive}>
          <TextLabelInput
            multiline={true}
            placeholder="Add a comment..."
            onChangeText={setComment}
            value={comment}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </TextBox>
        {image && (
          <ImageWrapper>
            <ImageComponent
              source={{ uri: image }}
              style={{
                flex: 1,
                width: "100%",
              }}
            >
              <CancelPhotoButtonView tint="dark">
                <ButtonClose onPress={handleCancelPhoto}>
                  <AntDesign name="close" size={24} color="white" />
                </ButtonClose>
              </CancelPhotoButtonView>
            </ImageComponent>
          </ImageWrapper>
        )}
        {!image && (
          <GalleryContainer>
            <ImagesThumbnail>
              <AddButton>
                <Add>
                  <AntDesign
                    name="plus"
                    size={32}
                    color={theme.COLORS.SUCCESS_500}
                  />
                </Add>
              </AddButton>
            </ImagesThumbnail>
            <ImagesThumbnail>
              <Add onPress={handleAddPhoto}>
                <ImageComponent
                  source={{ uri: "https://thispersondoesnotexist.com/image" }}
                  style={{ flex: 1, width: "100%" }}
                />
              </Add>
            </ImagesThumbnail>
            <ImagesThumbnail>
              <Add>
                <ImageComponent
                  source={{ uri: "https://thispersondoesnotexist.com/image" }}
                  style={{ flex: 1, width: "100%" }}
                />
              </Add>
            </ImagesThumbnail>
            <ImagesThumbnail>
              <Add onPress={handleAddPhoto}>
                <ImageComponent
                  source={{ uri: "https://thispersondoesnotexist.com/image" }}
                  style={{ flex: 1, width: "100%" }}
                />
              </Add>
            </ImagesThumbnail>
          </GalleryContainer>
        )}
      </Content>
    </Container>
  );
}
