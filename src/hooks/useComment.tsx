import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./auth";
import { Alert } from "react-native";

export function useComment(postId: string) {
  const { user } = useAuth();
  //States
  const [commentLoading, setCommentLoading] = useState(false);
  const [commentsArray, setCommentsArray] = useState([]);

  async function handleCommentPost(comment: string) {
    setCommentLoading(true);

    if (comment) {
      await firestore()
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .add({
          comment,
          commentAuthor: user.id,
          createdAt: firestore.FieldValue.serverTimestamp(),
        })
        .catch((error) => Alert.alert(error));
    }
    setCommentLoading(false);
  }
  async function fetchComments() {
    const result = await firestore()
      .collection("posts")
      .doc(postId)
      .collection("comments")
      .get();
    const comments = [];

    result.docs.map((item) => {
      comments.push(item.data());
    });
    setCommentsArray(comments);
  }
  return {
    commentLoading,
    handleCommentPost,
    fetchComments,
    commentsArray,
  };
}
