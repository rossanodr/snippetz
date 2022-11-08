import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";
import * as Yup from "yup";

<<<<<<< HEAD

=======
>>>>>>> ace9350... implementing comments
import {
  Container,
  Content,
  Footer,
  TextContainer,
  TextLabel,
  Title,
} from "./styles";
<<<<<<< HEAD

export function SignIn() {
  //States
=======
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

export function SignIn() {
   //States
>>>>>>> ace9350... implementing comments
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Hooks
  const { signIn, isLogging, forgotPassword } = useAuth();

  //Functions
<<<<<<< HEAD
  function handleSignIn() {
    signIn(email, password);
  }
=======
  async function handleSignIn() {
    await signIn(email, password)
  }

>>>>>>> ace9350... implementing comments
  function handleForgotPassword() {
    forgotPassword(email);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Content>
            <BackButton />
          </Content>

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
            <TextContainer onPress={handleForgotPassword}>
              <TextLabel>Forgot Password</TextLabel>
            </TextContainer>

            <TextContainer>
              <TextLabel>I accept the Terms and Privacy Policy</TextLabel>
            </TextContainer>
          </Footer>
          <Button
            title="Sign In"
            type="primary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
