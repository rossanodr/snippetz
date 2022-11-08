import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./auth";

export function useLikePost(postId: string) {
  const { user } = useAuth();
  //States
  const [loading, setLoading] = useState(true);
  const [likedPost, setLikedPost] = useState(false);

  async function handleLikePost() {
    if (likedPost) {
      //deletes the like in the post and user likes collection
      await firestore()
        .collection("users")
        .doc(user.id)
        .collection("likedPosts")
        .doc(postId)
        .delete();

      await firestore()
        .collection("posts")
        .doc(postId)
        .collection("likes")
        .doc(user.id)
        .delete();
      setLikedPost(false);
    } else {
      //creates a new doc with the post id in the user collection, and creates a doc with the likes in the post collection
      await firestore()
        .collection("users")
        .doc(user.id)
        .collection("likedPosts")
        .doc(postId)
        .set({});

      await firestore()
        .collection("posts")
        .doc(postId)
        .collection("likes")
        .doc(user.id)
        .set({});
      setLikedPost(true);
    }
  }

  useEffect(() => {
    setLoading(true);
    //check if the post is liked
    async function fetchPost() {
      const data = await firestore()
        .collection("users")
        .doc(user.id)
        .collection("likedPosts")
        .doc(postId)
        .get();

      setLikedPost(data.exists);
    }

    fetchPost();
    setLoading(false);
  }, [likedPost]);

  return {
    loading,
    likedPost,
    handleLikePost,
  };
}
