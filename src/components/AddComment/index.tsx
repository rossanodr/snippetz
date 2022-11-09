import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar } from "../Avatar";
import { CommentInput } from "../CommentsInput";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { CommentContainer, CommentsCountText, Container } from "./styles";
import { CommentsModal } from "../CommentsModal";
import { CommentsArray } from "../../interfaces";

interface InputProps extends TextInputProps {
  handleButtonPress: (comment: string) => void;
  commentsArray: CommentsArray[];
  loading: boolean;
  numberOfComments: string;
}

export function AddComment({
  handleButtonPress,
  loading,
  commentsArray,
  numberOfComments
}: InputProps) {
  const [isActive, setIsActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <CommentContainer active={isActive}>
        <CommentInput
          active={setIsActive}
          handleButtonPress={handleButtonPress}
          loading={loading}
        />

        {!isActive && (
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <CommentsCountText>({numberOfComments ? numberOfComments : '0'} Comments)</CommentsCountText>
          </TouchableOpacity>
        )}
      </CommentContainer>

      <CommentsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        commentsArray={commentsArray}
        loading={loading}
        handleButtonPress={handleButtonPress}
      />
    </Container>
  );
}
