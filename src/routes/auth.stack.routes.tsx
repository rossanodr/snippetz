import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { FirstScreen } from '../screens/FirstScreen';
import { SignUp } from '../screens/SignUp';
import { SignIn } from '../screens/SignIn';

const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="FirstScreen" component={FirstScreen} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="SignIn" component={SignIn} />
        </Navigator>
    )
}