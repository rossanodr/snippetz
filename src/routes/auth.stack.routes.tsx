import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstScreen } from "../screens/FirstScreen";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { PhotoScreen } from "../screens/PhotoScreen";
import { PostScreen } from "../screens/PostScreen";
import { CreatePost } from "../screens/CreatePost";
<<<<<<< HEAD
=======
import { MyProfileScreen } from "../screens/MyProfileScreen";
>>>>>>> ace9350... implementing comments

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
      {/* <Screen name="FirstScreen" component={FirstScreen} /> */}
      <Screen name="Home" component={Home} />
      <Screen name="PhotoScreen" component={PhotoScreen} />
      <Screen name="PostScreen" component={PostScreen} />
      <Screen name="CreatePost" component={CreatePost} />

=======
      <Screen name="FirstScreen" component={FirstScreen} />

      
>>>>>>> ace9350... implementing comments

      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
