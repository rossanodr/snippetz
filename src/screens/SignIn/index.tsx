import React from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Footer, TextContainer, TextLabel, Title } from "./styles";

export function SignIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <Container>
        <Title>Login</Title>

        <Input placeholder="Email" autoCorrect={false} type="secondary" />
        <Input placeholder="Password" autoCorrect={false} type="secondary" />
        <Footer>
          <TextContainer>
            <TextLabel>Forgot Password</TextLabel>
          </TextContainer>

          <TextContainer>
            <TextLabel>I accept the Terms and Privacy Policy</TextLabel>
          </TextContainer>
        </Footer>
        <Button title="Sign In" type="primary" />
      </Container>
    </KeyboardAvoidingView>
  );
}
