import React, { useState } from "react";
import { useTheme } from "styled-components";
import { Feather } from "@expo/vector-icons";
import { Container, IconView, InputText } from "./styles";
import { TextInputProps, TouchableOpacity } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  
  active?: (activity: boolean)=>void;
}

export function CommentInput({ iconName,  active, ...rest }: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
       
        {...rest}
      />
      {isFocused && (
        <IconView isFocused={isFocused}>
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
      )}
    </Container>
  );
}
