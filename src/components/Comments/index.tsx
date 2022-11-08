<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> ace9350... implementing comments
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "../Avatar";
import { AntDesign } from "@expo/vector-icons";

import {
  AvatarContainer,
  Comment,
  Container,
  Label,
  LabelContainer,
  Name,
  NameAndCommentContainer,
  TextContainer,
} from "./styles";
<<<<<<< HEAD

export function Comments() {
  return (
    
      
    <Container>

      <AvatarContainer>
        <Avatar
          size={45}
          radius={20}
          avatarUrl={"http://notarealhuman.com/face"}
          />
=======
import { useFocusEffect } from "@react-navigation/native";
import { useFetchUser } from "../../hooks/useFetchUser";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

interface Props {
  commentAuthorId: string;
  comment: string;
  createdAt?: FirebaseFirestoreTypes.DocumentData;
}

export function Comments({ commentAuthorId, comment, createdAt }: Props) {
  const { authorName, postAuthorAvatar } = useFetchUser(commentAuthorId);
  

  return (
    <Container>
      <AvatarContainer>
        <Avatar size={45} radius={20} avatarUrl={postAuthorAvatar} />
>>>>>>> ace9350... implementing comments
      </AvatarContainer>
      <TextContainer>
        <NameAndCommentContainer>
          <Comment>
<<<<<<< HEAD
            <Name>Rossano </Name>It dsasddsssssssssss
=======
            <Name>{authorName} </Name>
            {comment}
>>>>>>> ace9350... implementing comments
          </Comment>
        </NameAndCommentContainer>

        <LabelContainer>
<<<<<<< HEAD
          <Label>12h</Label>
=======
          <Label>{createdAt.toDate().toDateString()}</Label>
>>>>>>> ace9350... implementing comments

          <TouchableOpacity>
            <Label>3 likes</Label>
          </TouchableOpacity>
          <TouchableOpacity>
            <Label>Reply</Label>
          </TouchableOpacity>
        </LabelContainer>
      </TextContainer>
<<<<<<< HEAD

      
    </Container>
         
         
         
=======
    </Container>
>>>>>>> ace9350... implementing comments
  );
}
