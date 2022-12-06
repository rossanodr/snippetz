import React, { useEffect, useState } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { useComment } from "../../hooks/useComment";

import { useFetchPost } from "../../hooks/useFetchPost";
import { useLikePost } from "../../hooks/useLikePost";
import { useSavePost } from "../../hooks/useSavePost";
import { PostType } from "../../interfaces";
import { AddComment } from "../AddComment";
import { Comments } from "../Comments";
import { CommentInput } from "../CommentInput";
import { PostImageType } from "../PostImageType";
import { PostTextType } from "../PostTextType";
import { Container, Content } from "./styles";
import { SkeletonComponent } from "../SkeletonComponent";

interface Props extends PostType {
  postId: string;
}
export function Post({ postId, screenType, isRepost }: Props) {
  const [active, setActive] = useState(false);
  const [comment, setComment] = useState("");

  //FETCH POST DATA BASED ON postId

  const { handleSavePost, savedPost } = useSavePost(postId);
  const { handleLikePost, likedPost } = useLikePost(postId);
  const { loading, post } = useFetchPost(postId, likedPost);
  const { handleCommentPost, commentLoading, fetchComments, commentsArray } =
    useComment(postId);

  useEffect(() => {
    fetchComments();
  }, []);

  return loading ? (
    <SkeletonComponent />
  ) : (
  post.postPhotoUrl ? (
    <>
      <Container
        screenType={screenType}
        postType="image"
        style={
          screenType === "small"
            ? {
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }
            : null
        }
      >
        <PostImageType
          loading={loading}
          postAuthor={post.postAuthor}
          postAuthorAvatar={post.postAuthorAvatar}
          postBody={post.postBody}
          postTimeStamp={post.postTimeStamp}
          postTitle={post.postTitle}
          postPhotoUrl={post.postPhotoUrl}
          screenType={screenType}
          isRepost={isRepost}
          postAuthorId={post.postAuthorId}
          postId={postId}
          handleSavePost={handleSavePost}
          savedPost={savedPost}
          numberOfComments={post.numberOfComments}
          numberOfLikes={post.numberOfLikes}
          handleLikePost={handleLikePost}
          likeButtonActivity={likedPost}
        />
      </Container>

        {/* Shows up the first comment, and a input to comment with a button that opens a modal that renders a FlatList with all comments and a input to comment the post */}
      {screenType !== 'fullscreen' && (
      <Content>
        {commentsArray[1] && (
          <Comments
          comment={commentsArray[1].comment}
          commentAuthorId={commentsArray[1].commentAuthor}
          createdAt={commentsArray[1].createdAt}
          />
        )}

        <AddComment
          handleButtonPress={handleCommentPost}
          loading={commentLoading}
          commentsArray={commentsArray}
          numberOfComments={commentsArray.length.toString()}
          />
      </Content>
          )}
    </>
  ) : (
    <>
      <Container
        screenType={screenType}
        postType="image"
        style={
          screenType === "small"
            ? {
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }
            : null
        }
      >
        <PostTextType
          loading={loading}
          postAuthor={post.postAuthor}
          postAuthorAvatar={post.postAuthorAvatar}
          postBody={post.postBody}
          postTimeStamp={post.postTimeStamp}
          postTitle={post.postTitle}
          screenType={screenType}
          isRepost={isRepost}
          postAuthorId={post.postAuthorId}
          postId={postId}
          handleSavePost={handleSavePost}
          savedPost={savedPost}
          numberOfComments={post.numberOfComments}
          numberOfLikes={post.numberOfLikes}
          handleLikePost={handleLikePost}
          likeButtonActivity={likedPost}
        />
      </Container>
      {/* Shows up the first comment, and a input to comment with a button that opens a modal that renders a FlatList with all comments and a input to comment the post */}
      {screenType !== 'fullscreen' && (

      <Content>
        {commentsArray[1] && (
          <Comments
            comment={commentsArray[1].comment}
            commentAuthorId={commentsArray[1].commentAuthor}
            createdAt={commentsArray[1].createdAt}
          />
        )}

        <AddComment
          handleButtonPress={handleCommentPost}
          loading={commentLoading}
          commentsArray={commentsArray}
          numberOfComments={commentsArray.length.toString()}
        />
      </Content>
          )}
    </>
  ))
}
