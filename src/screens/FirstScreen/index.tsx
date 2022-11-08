import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground } from "react-native";
import homeBackgroundImg from "../../assets/homeBackground.png";
import { Button } from "../../components/Button";
<<<<<<< HEAD
=======
import { useTypeNavigation } from "../../hooks/useTypeNavigation";
>>>>>>> ace9350... implementing comments

import { ButtonContainer, Container, SubTitle, Title } from "./styles";

export function FirstScreen() {
<<<<<<< HEAD
    const navigation = useNavigation();
=======
    const navigation =useTypeNavigation();

>>>>>>> ace9350... implementing comments
    function handleSignInNavigation(){
        navigation.navigate('SignIn');
    }
    function handleSignUpNavigation(){
        navigation.navigate('SignUp');
    }
<<<<<<< HEAD
=======

>>>>>>> ace9350... implementing comments
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

<<<<<<< HEAD
      <Button title="Sign Up" type="primary" onPress={handleSignUpNavigation}/>
=======
      <Button title="Sign Up" type="primary" onPress={handleSignUpNavigation} />
>>>>>>> ace9350... implementing comments
      <Button title="Sign In" type="secondary" onPress={handleSignInNavigation}/>
      </ButtonContainer>
      </Container>
    </ImageBackground>
  );
}
