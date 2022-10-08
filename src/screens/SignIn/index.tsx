import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

import { Container, Footer, TextContainer, TextLabel, Title } from "./styles";

export function SignIn() {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Hooks
  const { signIn, isLogging } = useAuth();

  //Functions
  function handleSignIn() {
    signIn(email, password);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <Title>Login</Title>

        <Input
          placeholder="Email"
          autoCorrect={false}
          type="secondary"
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          autoCorrect={false}
          type="secondary"
          secureTextEntry
          onChangeText={setPassword}
        />
        <Footer>
          <TextContainer>
            <TextLabel>Forgot Password</TextLabel>
          </TextContainer>

          <TextContainer>
            <TextLabel>I accept the Terms and Privacy Policy</TextLabel>
          </TextContainer>
        </Footer>
        <Button title="Sign In" type="primary" onPress={handleSignIn} isLoading={isLogging}/>
      </Container>
    </KeyboardAvoidingView>
  );
}
