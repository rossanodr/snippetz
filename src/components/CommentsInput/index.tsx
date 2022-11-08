import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Container, IconView, InputText } from "./styles";
import {
  ActivityIndicator,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
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

  function handleInputFocus() {
    setIsFocused(true);
    active(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    active(false);
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
          <BorderlessButton onPress={handleButtonPress}>
            <Feather
              name={iconName}
              size={24}
              color={theme.COLORS.SUCCESS_900}
            />
          </BorderlessButton>
          {loading && <ActivityIndicator />}
        </IconView>
      )}
    </Container>
  );
}
