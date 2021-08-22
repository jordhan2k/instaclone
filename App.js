import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as firebase from 'firebase';
import { firebaseConfig } from './app/utils/constants';
import AuthStack from './app/navigation/AuthStack';
import AppStack from './app/navigation/AppStack';
import AppTabs from './app/navigation/AppTabs';
import { Provider } from 'react-redux';
import store from './app/store/store';



if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {

  const [fontsLoaded] = useFonts({
    "Special-Elite": require("./assets/fonts/SpecialElite-Regular.ttf"),
    "Billabong": require("./assets/fonts/Billabong.ttf"),
    "Gilroy-ExtraBold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
  });


  // firebase state
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);


  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    console.log(user);
  }, [])
  useEffect(() => {

    const subcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber;
  }, [])



  if (initializing)
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#9BC957" />
      </View>
    );


  if (!fontsLoaded) {
    return null;
  }



  return (
    <>
      <StatusBar barStyle="default" />

      {user === null
        ? <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
        : (<Provider store={store}>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </Provider>)}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "#e5e8ec"
  }
});