import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "../Avatar";
import { CommentInput } from "../CommentsInput";

import {
  AddCommentContainer,
  AddCommentText,
  CommentContainer,
  CommentsCountText,
  Container,
} from "./styles";

export function AddComment() {
    const [isActive, setIsActive] = useState(false);
    const [ comment, setComment ] = useState('');
    
  return (
    <Container>
      <CommentContainer active={isActive}>
        <AddCommentContainer>
          <Avatar
            size={27}
            radius={10}
            avatarUrl={"http://notarealhuman.com/face"}
          />
          <CommentInput iconName="arrow-right-circle" active={setIsActive} placeholder='Add a comment...' onChangeText={setComment} value={isActive ? comment : ''}/>
        </AddCommentContainer>
          {!isActive && 
          
        //   <AddCommentText>Add comment...</AddCommentText>
        <TouchableOpacity>

        <CommentsCountText>(273 Comments)</CommentsCountText>
        </TouchableOpacity>
          }
      </CommentContainer>
    </Container>
  );
}
