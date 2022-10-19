import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { AddComment } from "../../components/AddComment";
import { Avatar } from "../../components/Avatar";
import { Comments } from "../../components/Comments";
import { MainHeader } from "../../components/MainHeader";
import { PostImageType } from "../../components/PostImageType";
import { PostTextType } from "../../components/PostTextType";
import { Repost } from "../../components/Repost";
import { PhotoScreen } from "../PhotoScreen";

import {
  Container,
  Content,
  Feed,
  HeaderContainer,
  Post,
  GoToPostButton,
} from "./styles";

export function Home() {
  const navigation = useNavigation();
  function handleNavigateToPost() {
    navigation.navigate("PhotoScreen");
  }

  return (
    <Container>
      <Content>
        <HeaderContainer>
          <MainHeader />
        </HeaderContainer>

       
        <Feed>
          <Post>
            <GoToPostButton>
              <Repost postType="image" screenType="small" />
            </GoToPostButton>
            
          </Post>
          <Post>
            <GoToPostButton>
              {/* <PostImageType screenType="small" /> */}
              {/* <PostTextType screenType="small" /> */}
              <Repost postType="text" screenType="small" />
            </GoToPostButton>
            {/* <Comments /> */}

            {/* <AddComment /> */}
          </Post>
          <Post>
            <PostImageType screenType="small" />
          </Post>
          <Post>
            <PostTextType screenType="small" />
          </Post>
        </Feed>
       
      </Content>
    </Container>
  );
}
