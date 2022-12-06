import React, { useState } from "react";
import { Alert, Modal, Text } from "react-native";
import {
  FlatList,
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { CommentsArray } from "../../interfaces";
import { Comments } from "../Comments";
import { CommentInput } from "../CommentInput";
import { AntDesign } from '@expo/vector-icons';
import { ButtonClose, Container, ModalView, View } from "./styles";
interface Props {
  modalVisible: boolean;
  setModalVisible: (boolean) => void;

  handleButtonPress: (comment: string) => void;
  commentsArray: CommentsArray[];
  loading: boolean;
}
export function CommentsModal({
  modalVisible,
  commentsArray,
  loading,
  setModalVisible,
  handleButtonPress,
}: Props) {
  const [isActive, setIsActive] = useState(false);

  const ExampleWithHoc = gestureHandlerRootHOC(() => (
    <CommentInput
      active={setIsActive}
      handleButtonPress={handleButtonPress}
      loading={loading}
    />
  ));

  return (
    <Container>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Container>
          <ModalView>
          <ButtonClose onPress={() => setModalVisible(!modalVisible)}>
          <AntDesign name="closecircleo" size={24} color="black" />
            </ButtonClose>
            <FlatList
              data={commentsArray}
              renderItem={(item) => (
                <View>
                  <Comments
                    comment={item.item.comment}
                    commentAuthorId={item.item.commentAuthor}
                    createdAt={item.item.createdAt}
                  />
                </View>
              )}
            />
            <View>
              <ExampleWithHoc />
            </View>
            
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
}
