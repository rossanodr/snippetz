import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Container, IconView, InputText } from "./styles";
<<<<<<< HEAD
import { TextInputProps, TouchableOpacity } from "react-native";
=======
import {
  ActivityIndicator,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
>>>>>>> ace9350... implementing comments
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
<<<<<<< HEAD
  
  active?: (activity: boolean)=>void;
}

export function CommentInput({ iconName,  active, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
=======
  setComment: (comment: string) => void;
  active?: (activity: boolean) => void;
  handleButtonPress: () => void;
  loading: boolean;
}

export function CommentInput({
  iconName,
  active,
  setComment,
  handleButtonPress,
  loading,
  ...rest
}: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
>>>>>>> ace9350... implementing comments

  function handleInputFocus() {
    setIsFocused(true);
    active(true);
<<<<<<< HEAD
    
=======
>>>>>>> ace9350... implementing comments
  }

  function handleInputBlur() {
    setIsFocused(false);
<<<<<<< HEAD
    
=======

>>>>>>> ace9350... implementing comments
    active(false);
  }

  return (
    <Container>
      <InputText
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        multiline={true}
<<<<<<< HEAD
       
=======
        placeholder="Add a comment"
        onChangeText={setComment}
>>>>>>> ace9350... implementing comments
        {...rest}
      />
      {isFocused && (
        <IconView isFocused={isFocused}>
<<<<<<< HEAD
            <BorderlessButton>

            <Feather
              name={iconName}
              size={24}
              color={
                theme.COLORS.SUCCESS_900
              }
              />
              </BorderlessButton>
       
          </IconView>
=======
          <BorderlessButton onPress={handleButtonPress}>
            <Feather
              name={iconName}
              size={24}
              color={theme.COLORS.SUCCESS_900}
            />
          </BorderlessButton>
          {loading && <ActivityIndicator />}
        </IconView>
>>>>>>> ace9350... implementing comments
      )}
    </Container>
  );
}
