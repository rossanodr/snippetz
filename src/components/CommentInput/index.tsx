import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Container, IconView, InputText } from "./styles";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  active?: (activity: boolean) => void;
  handleButtonPress: (comment: string) => void;
  loading: boolean;
}

export function CommentInput({
  active,
  handleButtonPress,
  loading,
  ...rest
}: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [comment, setComment] = useState("");

  function handleInputFocus() {
    setIsFocused(true);
    active(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    active(false);
  }
  
  function handleComment() {
    if(comment){
      handleButtonPress(comment);
    }else{
      Alert.alert("Ops", "You forgot to enter a comment")
    }
  }

  return (
    <Container>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        multiline={true}
        placeholder="Add a comment"
        onChangeText={setComment}
        {...rest}
      />

      {isFocused && (
        <IconView isFocused={isFocused}>
          <BorderlessButton onPress={handleComment}>
            <Feather
              name="arrow-right-circle"
              size={24}
              color={theme.COLORS.SUCCESS_900}
            />
          </BorderlessButton>
        </IconView>
      )}
      {loading && (
        <IconView>
          <ActivityIndicator />
        </IconView>
      )}
    </Container>
  );
}
