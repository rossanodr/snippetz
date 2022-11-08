import React, { useState } from "react";
import {
  Alert,
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

import {
  Container,
  Content,
  Footer,
  TextContainer,
  TextLabel,
  Title,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useTypeNavigation } from "../../hooks/useTypeNavigation";

export function SignUp() {
  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //Hooks
  const { signUp, isLogging } = useAuth();
  const navigation = useTypeNavigation();

  //Functions
  async function handleSignUp() {
    let a = null;
    const schema = Yup.object().shape({
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must be the same")
        .required("You must confirm your password"),
      password: Yup.string().required("Password is required"),
      name: Yup.string().required("Name is required"),
      idNumber: Yup.string().required("Id number is required"),
    });
    try {
      await schema.validate({ password, confirmPassword, name, idNumber });
      a = await signUp(email, password, name, idNumber);
      a ? navigation.navigate("SignIn") : null;
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
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
          <Title>Sign Up</Title>

          <Input
            placeholder="Name"
            autoCorrect={false}
            type="primary"
            onChangeText={setName}
          />
          <Input
            placeholder="Email"
            autoCorrect={false}
            type="primary"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Id Number"
            keyboardType="numeric"
            type="primary"
            onChangeText={setIdNumber}
          />
          <Input
            placeholder="Password"
            autoCorrect={false}
            type="primary"
            secureTextEntry
            onChangeText={setPassword}
          />
          <Input
            placeholder="Repeat your Password"
            autoCorrect={false}
            type="primary"
            secureTextEntry
            onChangeText={setConfirmPassword}
          />
          <Footer>
            <TextContainer>
              <TextLabel>I accept the Terms and Privacy Policy</TextLabel>
            </TextContainer>
          </Footer>
          <Button
            title="Sign Up"
            type="primary"
            isLoading={isLogging}
            onPress={handleSignUp}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
