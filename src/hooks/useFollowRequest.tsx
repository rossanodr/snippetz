import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { PostContent } from "../interfaces";
import { useLikePost } from "./useLikePost";
import { useAuth } from "./auth";

export function useFollowRequest(userId: string) {
  //States
  const [loadingUserFollowed, setLoadingUserFollowed] = useState(false);
  const [isUserFollowed, setIsUserFollowed] = useState(false);

  const { user } = useAuth();

  async function handleFollow() {
    setLoadingUserFollowed(true);

    const data = await firestore()
      .collection(`usersRelationship`)
      .doc(`${user.id}`)
      .collection("following")
      .doc(userId)
      .get();

    if (data.exists) {
     
     
      await firestore()
        .collection(`usersRelationship`)
        .doc(`${user.id}`)
        .collection("following")
        .doc(userId)
        .delete();
      await firestore()
        .collection(`usersRelationship`)
        .doc(userId)
        .collection("followers")
        .doc(`${user.id}`)
        .delete();
    } else {
      
      await firestore()
        .collection(`usersRelationship`)
        .doc(`${user.id}`)
        .collection("following")
        .doc(userId)
        .set({});
      await firestore()
        .collection(`usersRelationship`)
        .doc(userId)
        .collection("followers")
        .doc(`${user.id}`)
        .set({});
    }
    setLoadingUserFollowed(false);
  }

  useEffect(() => {
    

    async function fetchFollowing() {
      const follow = await firestore()
        .collection(`usersRelationship`)
        .doc(`${user.id}`)
        .collection("following")
        .doc(userId)
        .get();

      setIsUserFollowed(follow.exists);
    }
    

    fetchFollowing();
  }, [loadingUserFollowed]);

  return {
    loadingUserFollowed,
    handleFollow,
    isUserFollowed,
  };
}
