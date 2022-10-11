import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  AvatarButton,
  Button,
  Container,
  SaveContainer,
  SubTitle,
  TextContainer,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar } from "../Avatar";

export function PostHeader() {
  const { COLORS } = useTheme();
  const [active, setActive] = useState(false);

  function handleSavePost(){
setActive(!active);
  }

  return (
    <Container>
      <AvatarButton>
        <Avatar size={56} radius={23} />
        <TextContainer>
          <Title>Rossano</Title>
          <SubTitle>19 hour ago</SubTitle>
        </TextContainer>
      </AvatarButton>
      <Button onPress={handleSavePost}>
        <SaveContainer active={active}>
          
        <MaterialCommunityIcons name="bookmark-check-outline"
            size={24}
            color={COLORS.SHAPE}
          />
{/* <MaterialCommunityIcons name="bookmark-minus-outline" size={24} color="black" /> */}
        </SaveContainer>
      </Button>
    </Container>
  );
}
