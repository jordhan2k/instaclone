import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Landing from '../screens/auth/Landing';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';



const Stack = createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                    gestureDirection: "horizontal",
                    gestureEnabled: true
                }
            }

            initialRouteName="Landing"


        >
            <Stack.Screen
                name="Landing"
                component={Landing} />

            <Stack.Screen
                name="Signup"
                component={Signup} />
            <Stack.Screen
                name="Signin"
                component={Signin} />

        </Stack.Navigator>
    )
}
