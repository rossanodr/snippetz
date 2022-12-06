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
    
    async function fetchPost() {
      setLoading(true);
      const data = await firestore().collection("users").doc(userId).get();
      if (data.exists) {
        setAuthorName(data.get("name").toLocaleString());
        
        if (data.get("avatarUrl")) {
          setPostAuthorAvatar(data.get("avatarUrl").toLocaleString());
        } else {
          setPostAuthorAvatar(
            `https://ui-avatars.com/api/?name=${data
              .get("name")
              .toLocaleString()}}`
          );
        }
      }
      setLoading(false);
    }

    fetchPost();
  }, []);

  return {
    loading,
    authorName,
    postAuthorAvatar,
  };
}
