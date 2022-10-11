import React from "react";
import { ImageBackground } from "react-native";
import { PhotoScreenMenu } from "../PhotoScreenMenu";
import { PostHeader } from "../PostHeader";
import Img from "../../assets/9x16.png";
import ImgA from "../../assets/imgTest.png";

import {
  AvatarContainer,
  Container,
  Content,
  FirstAvatarContainer,
  LikesContainer,
  Menu,
  SubTitle,
  TextContent,
  Title,
} from "./styles";
import { Avatar } from "../Avatar";

export function PhotoPost() {
  return (
    <ImageBackground source={ImgA} resizeMode="cover" style={{ flex: 1 }}>
      <Container>
        <PostHeader />
        

        <Menu >
          <PhotoScreenMenu />
        </Menu>
        <Content>

        <TextContent>
          <Title>Titulo dessa foto incrivel</Title>
          <SubTitle>Texto descritivo da foto</SubTitle>
        </TextContent>
        <LikesContainer>
          <FirstAvatarContainer>
          <Avatar size={37} radius={19} />

          </FirstAvatarContainer>
          <AvatarContainer>
          <Avatar size={37} radius={19} />

          </AvatarContainer>
          <AvatarContainer>
          <Avatar size={37} radius={19} />

          </AvatarContainer>
        </LikesContainer>
        </Content>
      </Container>
    </ImageBackground>
  );
}
