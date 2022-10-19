import React from "react";
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

export function Comments() {
  return (
    
      
    <Container>

      <AvatarContainer>
        <Avatar
          size={45}
          radius={20}
          avatarUrl={"http://notarealhuman.com/face"}
          />
      </AvatarContainer>
      <TextContainer>
        <NameAndCommentContainer>
          <Comment>
            <Name>Rossano </Name>It dsasddsssssssssss
          </Comment>
        </NameAndCommentContainer>

        <LabelContainer>
          <Label>12h</Label>

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
