import React, { useEffect } from "react";
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
        <Avatar size={45} radius={20} avatarUrl={postAuthorAvatar} name={authorName}/>
      </AvatarContainer>
      <TextContainer>
        <NameAndCommentContainer>
          <Comment>
            <Name>{authorName} </Name>
            {comment}
          </Comment>
        </NameAndCommentContainer>

        <LabelContainer>
          <Label>{createdAt.toDate().toDateString()}</Label>

          <TouchableOpacity>
            <Label>3 likes</Label>
          </TouchableOpacity>
          <TouchableOpacity>
            <Label>Reply</Label>
          </TouchableOpacity>
        </LabelContainer>
      </TextContainer>
    </Container>
  );
}
