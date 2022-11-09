import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { PostContent } from "../interfaces";
import { useLikePost } from "./useLikePost";

export function useFetchUser(userId: string) {
  //States
  const [loading, setLoading] = useState(true);
  const [authorName, setAuthorName] = useState("");
  const [postAuthorAvatar, setPostAuthorAvatar] = useState("");

  useEffect(() => {
    setLoading(true);
    
    async function fetchPost() {
      const data = await firestore().collection("users").doc(userId).get();
      if (data.exists) {
        setAuthorName(data.get("name").toLocaleString());
        setPostAuthorAvatar(data.get("avatarUrl").toLocaleString());
      }
    }

    fetchPost();
  }, []);

  return {
    loading,
    authorName,
    postAuthorAvatar,
  };
}
