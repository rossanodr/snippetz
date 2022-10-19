import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTypeNavigation } from "../../hooks/useTypeNavigations";
import { PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { PostHeader } from "../PostHeader";
import { PostImageType } from "../PostImageType";
import { PostTextType } from "../PostTextType";

import {
  Container,
  Content,
  RepostImage,
  RepostNavigationButton,
  RepostText,
  Text,
  TextContent,
} from "./styles";

export function Repost({
  screenType = "small",
  postType,
  isRepost = true,
}: PostType) {
  const navigation = useTypeNavigation();

  function handleNavigation(postType: string) {
    navigation.navigate("PostScreen", { postType, screenType: "fullscreen",isRepost });
  }

  return (
    <Container>
      <PostHeader
        name="Rossano"
        time="19 hour ago"
        avatarUrl="http://www.github.com/rossanodr.png"
        screenType={screenType}
        postType={postType}
        isRepost={isRepost}
      />
      <Content>
        <FloatingMenu screenType="small" />

        <TextContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            explicabo neque ullam soluta veritatis quas a.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            explicabo neque ullam soluta veritatis quas a.
          </Text>
        </TextContent>
        
        {postType === "image" ? (
          <RepostImage>
            <RepostNavigationButton onPress={() => handleNavigation(postType)}>
              <PostImageType screenType="small" isRepost={true} />
            </RepostNavigationButton>
          </RepostImage>
        ) : (
          <RepostText>
            <RepostNavigationButton onPress={() => handleNavigation(postType)}>
              <PostTextType screenType="small" isRepost={true} />
            </RepostNavigationButton>
          </RepostText>
        )}
      </Content>
    </Container>
  );
}
