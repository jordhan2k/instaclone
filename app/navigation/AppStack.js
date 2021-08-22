import React from 'react'
import { CardStyleInterpolators, createStackNavigator, StackView } from '@react-navigation/stack';
import Create from '../screens/app/homeStack/Create';
import AppTabs from './AppTabs';
import DirectMessage from '../screens/app/homeStack/DirectMessage';
import Search from '../screens/app/homeStack/Search';



const Stack = createStackNavigator();

export default function AppStack() {
    return (

        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

            }}
        >

            <Stack.Screen
                name="Main"
                component={AppTabs}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Create"
                component={Create}
            />

            <Stack.Screen
                name="Direct"
                component={DirectMessage}
            />

            <Stack.Screen
                name="Search"
                component={Search}
            />

        </Stack.Navigator>

    )
}
