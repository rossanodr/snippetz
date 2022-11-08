import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "./auth";

export function useSavePost(postId: string) {
  const { user } = useAuth();
  //States
  const [loading, setLoading] = useState(true);
  const [savedPost, setSavedPost] = useState(false);

  async function handleSavePost() {
    
    if (savedPost) {
      //deletes the savedPost in the post and user likes collection
      await firestore()
        .collection("users")
        .doc(user.id)
        .collection("savedPosts")
        .doc(postId)
        .delete();
      setSavedPost(false);
      
    } else {
      //creates a new doc with the post id in the user collection, and creates a doc with the savedPosts in the post collection

      await firestore()
        .collection("users")
        .doc(user.id)
        .collection("savedPosts")
        .doc(postId)
        .set({});
      setSavedPost(true);
    }
  }

  useEffect(() => {
    setLoading(true);
    //check if the post is saved

    async function fetchPost() {
      const data = await firestore()
        .collection("users")
        .doc(user.id)
        .collection("savedPosts")
        .doc(postId)
        .get();
     

      setSavedPost(data.exists);
    }
    fetchPost();
    setLoading(false);
  }, [savedPost]);

  return {
    loading,
    savedPost,
    handleSavePost,
  };
}
