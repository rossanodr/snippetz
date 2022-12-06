import { Skeleton } from "@rneui/base";
import React from "react";
import { useFetchPost } from "../../hooks/useFetchPost";
import { useLikePost } from "../../hooks/useLikePost";
import { useSavePost } from "../../hooks/useSavePost";
import { ImageComponent } from "../ImageComponent";
import { SkeletonContainer } from "../PostImageType/styles";
import { SkeletonComponent } from "../SkeletonComponent";

import { Container, GalleryFeed, ImageGalleryContainer } from "./styles";

interface Props {
  postId: string;
}

export function ImagesGallery({ postId }: Props) {
  const { handleSavePost, savedPost } = useSavePost(postId);
  const { handleLikePost, likedPost } = useLikePost(postId);
  const { loading, post } = useFetchPost(postId, likedPost);

  return loading ? (
    <SkeletonComponent />
  ) : (
    post.postPhotoUrl && (
      <GalleryFeed>
        <ImageGalleryContainer>
          <Container>
            <ImageComponent
              source={{ uri: post.postPhotoUrl }}
            ></ImageComponent>
          </Container>
        </ImageGalleryContainer>
      </GalleryFeed>
    )
  );
}
