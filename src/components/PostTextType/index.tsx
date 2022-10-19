import React from "react";
import { PostType } from "../../interfaces";
import { FloatingMenu } from "../FloatingMenu";
import { PostHeader } from "../PostHeader";

import { Container, Content, Header, Text } from "./styles";

export function PostTextType({screenType, isRepost}: PostType) {

  return (
    <Container isRepost={isRepost}>
      <Header>

      <PostHeader
        name="Rossano"
        time="19 hour ago"
        avatarUrl="http://www.github.com/rossanodr.png"
        screenType={screenType}
        />
        </Header>
      {!isRepost &&
      <FloatingMenu screenType="small" postType="text"/>
      }

      <Content screenType={screenType}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime officiis ut minima, fugit dicta similique, consequatur fugiat maiores ex doloribus aperiam ipsa vitae quaerat? Dolorem amet nobis quas rerum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maxime officiis ut minima, fugit dicta similique, consequatur fugiat maiores ex doloribus aperiam ipsa vitae quaerat? Dolorem amet nobis quas rerum.
        </Text>
      </Content>
    </Container>
  );
}
