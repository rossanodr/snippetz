import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { PostContent } from "../interfaces";
import { useLikePost } from "./useLikePost";

export function useFetchPost(postId: string, likedPost: boolean) {
  //States
  const [loading, setLoading] = useState(true);
  const [postAuthor, setPostAuthor] = useState("");
  const [postAuthorId, setPostAuthorId] = useState("");
  const [postAuthorAvatar, setPostAuthorAvatar] = useState("");
  const [postTimeStamp, setPostTimeStamp] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postPhotoUrl, setPostPhotoUrl] = useState("");
  const [postBody, setPostBody] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [numberOfComments, setNumberOfComments] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function fetchPost() {
      await firestore()
        .collection("posts")
        .doc(postId)
        .get()
        .then(async (res) => {
          const response = res.data();
          setPostTitle(response.title);
          setPostBody(response.body);
          setPostTimeStamp(response.createdAt.toDate().toDateString());
          setPostPhotoUrl(response.imageUrl);
          setPostAuthorId(response.postAuthor);
          setNumberOfLikes(response.likes);
          //-1 is because when the post is created the collection starts with a empty, and each like is one
          const likes = await firestore()
            .collection("posts")
            .doc(postId)
            .collection("likes")
            .get();
          setNumberOfLikes(likes.docs.length - 1);
          const comments = await firestore()
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .get();
          setNumberOfComments(comments.docs.length - 1);

          const data = await firestore()
            .collection("users")
            .doc(response.postAuthor)
            .get();
          setPostAuthor(data.get("name").toLocaleString());
          setPostAuthorAvatar(data.get("avatarUrl").toLocaleString());
         
        });
    }
    fetchPost();
    setLoading(false);
  }, [likedPost]);

  const post: PostContent = {
    numberOfComments: numberOfComments,
    numberOfLikes: numberOfLikes,
    postAuthor: postAuthor,
    postAuthorAvatar: postAuthorAvatar,
    postAuthorId: postAuthorId,
    postBody: postBody,
    postId: postId,
    postTimeStamp: postTimeStamp,
    postTitle: postTitle,
    postPhotoUrl: postPhotoUrl,
  };
  return {
    loading,
    post,
  };
}
