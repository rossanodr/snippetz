import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export interface User {
  userName?: string;
  avatarUrl?: string;
  id: string;
  name: string;
  coverUrl?: string;
  idNumber?: string;
}

export interface PostType {
  screenType: "fullscreen" | "small";
  postType?: "text" | "image";
  isRepost?: boolean;
}

export type PostContent = {
  postAuthor: string;
  postAuthorAvatar: string;
  postTimeStamp: string;
  postTitle: string;
  postPhotoUrl?: string;
  postBody: string;
  postAuthorId: string;
  postId: string;
  numberOfComments: number;
  numberOfLikes: number;
};

export interface RepostContentProps extends PostContent {
  repostTimeStamp?: string;
  repostTitle?: string;
  repostBody?: string;
  repostPhotoUrl?: string;
  repostAuthor?: string;
  repostAuthorAvatar?: string;
};

export interface CommentsArray {
  commentAuthor: string;
  comment: string;
  createdAt?: FirebaseFirestoreTypes.DocumentData;
}