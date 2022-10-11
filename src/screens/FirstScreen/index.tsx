import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground } from "react-native";
import homeBackgroundImg from "../../assets/homeBackground.png";
import { Button } from "../../components/Button";

import { ButtonContainer, Container, SubTitle, Title } from "./styles";

export function FirstScreen() {
    const navigation = useNavigation();
    function handleSignInNavigation(){
        navigation.navigate('SignIn');
    }
    function handleSignUpNavigation(){
        navigation.navigate('SignUp');
    }
  return (
    <ImageBackground
      source={homeBackgroundImg}
      resizeMode="cover"
      style={{ flex: 1, width: "100%" }}
    >
      <Container>
        <Title>Snippetz</Title>
        <SubTitle>Where you can be you</SubTitle>
      <ButtonContainer>

      <Button title="Sign Up" type="primary" onPress={handleSignUpNavigation}/>
      <Button title="Sign In" type="secondary" onPress={handleSignInNavigation}/>
      </ButtonContainer>
      </Container>
    </ImageBackground>
  );
}
