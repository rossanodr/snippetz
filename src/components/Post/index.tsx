import React, { useEffect, useState } from "react";
import { useComment } from "../../hooks/useComment";

import { useFetchPost } from "../../hooks/useFetchPost";
import { useLikePost } from "../../hooks/useLikePost";
import { useSavePost } from "../../hooks/useSavePost";
import { PostType } from "../../interfaces";
import { Comments } from "../Comments";
import { CommentInput } from "../CommentsInput";
import { PostImageType } from "../PostImageType";
import { PostTextType } from "../PostTextType";
import { Container, Content } from "./styles";

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
    useComment(postId, comment);

  useEffect(() => {
    fetchComments();
  }, []);

  return post.postPhotoUrl ? (
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
      <Content>
        {commentsArray && (
          <Comments
            comment={commentsArray[0].comment}
            commentAuthorId={commentsArray[0].commentAuthor}
            createdAt={commentsArray[0].createdAt}
          />
        )}

        <CommentInput
          iconName="arrow-right-circle"
          active={setActive}
          setComment={setComment}
          handleButtonPress={handleCommentPost}
          loading={commentLoading}
        />
      </Content>
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
      <Content>
      {commentsArray[0] && (
          <Comments
            comment={commentsArray[0].comment}
            commentAuthorId={commentsArray[0].commentAuthor}
            createdAt={commentsArray[0].createdAt}
          />
        )}

        <CommentInput
          iconName="arrow-right-circle"
          active={setActive}
          setComment={setComment}
          handleButtonPress={handleCommentPost}
          loading={commentLoading}
        />
      </Content>
    </>
  );
}
