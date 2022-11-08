<<<<<<< HEAD
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

=======
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker";
import { ActivityIndicator, Alert } from "react-native";
import { useTheme } from "styled-components/native";
import * as Yup from "yup";

import { Avatar } from "../../components/Avatar";
import { BackButton } from "../../components/BackButton";
import { ImageComponent } from "../../components/ImageComponent";
import { useAuth } from "../../hooks/auth";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
import {
  Add,
  AddButton,
  BackButtonAndPostButton,
  BodyInput,
  ButtonClose,
  CancelPhotoButtonView,
  Container,
  Content,
  GalleryContainer,
  Header,
  ImagesThumbnail,
  ImageWrapper,
  PostItButton,
  PostItText,
  TextBox,
  TitleInput,
} from "./styles";
import { PostContent } from "../../interfaces";

export function CreatePost() {
  const navigation = useTypeNavigation();

  const theme = useTheme();
  const { user } = useAuth();
  //States
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  //Functions
>>>>>>> ace9350... implementing comments
  function handleInputFocus() {
    setIsActive(true);
  }

  function handleInputBlur() {
    setIsActive(false);
  }
<<<<<<< HEAD
  function handleAddPhoto() {
    setImage("https://thispersondoesnotexist.com/image");
=======
  async function handleAddPhoto() {
    setImage("");
    const result = (await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    })) as ImageInfo;

    if (!result.cancelled) {
      //upload the image to the database, set the image to the userCollecion and display it
      setImage(result.uri);
      setIsEnabled(true);
    }
>>>>>>> ace9350... implementing comments
  }

  function handleCancelPhoto() {
    setImage("");
  }
<<<<<<< HEAD
=======

  async function handlePostIt() {
    let url = "";
    setLoading(true);
    if (image) {
      //Creates a reference to the image
      const fileName = new Date().getTime();
      const MIME = image.match(/\.(?:.(?!\.))+$/);
      const reference = storage().ref(`/images/${fileName}${MIME}`);

      //1st attempt to upload the image
      //2nd attempt to upload the texts to the post collection
      //3th attempt to create a doc in the user collection with the post id
      await reference
        .putFile(image)
        .then(async () => {
          url = await storage()
            .ref(`/images/${fileName}${MIME}`)
            .getDownloadURL();
        })
        .catch((error) => Alert.alert(error));
    }

    await firestore()
      .collection("posts")
      .add({
        title: title,
        body: body,
        imageUrl: url,
        createdAt: firestore.FieldValue.serverTimestamp(),
        postAuthor: user.id,
      })
      .then(
        async (data) => (
          await firestore()
            .collection("users")
            .doc(user.id)
            .collection("posts")
            .doc(data.id)
            .set({}),
          await firestore()
            .collection("posts")
            .doc(data.id)
            .collection("likes")
            .add({}),
          await firestore()
            .collection("posts")
            .doc(data.id)
            .collection("comments")
            .add({}),
          navigation.navigate("PostScreen", {
            postType: image ? "image" : "text",
            screenType: "fullscreen",
            isRepost: false,
            postId: data.id,
          })
        )
      )
      .catch((error) => Alert.alert(error))
      .finally(() => {
        setLoading(false), setImage("");
      });
  }
  // useEffect(()=> {
  //   console.log(user)
  // },[])

>>>>>>> ace9350... implementing comments
  return (
    <Container>
      <Content>
        <BackButtonAndPostButton>
          <BackButton />
<<<<<<< HEAD
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
=======
          <PostItButton onPress={handlePostIt} enabled={isEnabled}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <PostItText>Post It!</PostItText>
            )}
          </PostItButton>
        </BackButtonAndPostButton>
        <Header>
          <Avatar avatarUrl={user.avatarUrl} size={45} radius={14} />
          <TitleInput
            placeholder="Title"
            onChangeText={(t) => {
              t ? [setIsEnabled(true), setTitle(t)] : setIsEnabled(false);
            }}
            value={title}
            maxLength={25}
          />
        </Header>

        <TextBox active={isActive}>
          <BodyInput
            multiline={true}
            placeholder="What is on your mind?"
            onChangeText={(t) => {
              t ? [setIsEnabled(true), setBody(t)] : setIsEnabled(false);
            }}
            value={body}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            maxLength={287}
>>>>>>> ace9350... implementing comments
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
