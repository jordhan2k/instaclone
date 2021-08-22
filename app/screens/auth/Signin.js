import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormInput from '../../components/FormInput';
import { colors, fonts, height, width } from '../../utils/constants';
import firebase from 'firebase';



export default function Signin({ navigation }) {
    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',

    });

    const { email, password } = signupForm;

    const onEmailChange = email => {

    }

    const onSignIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            // .then(result => console.log(result))
            .catch(error => console.log(error));
    }



    return (
        <View style={styles.container}>

            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Ionicons
                        name="chevron-back-circle-outline"
                        size={35}
                        color={colors.black} />
                </TouchableOpacity>
                <Text
                    style={styles.appName}>Instaclone</Text>
            </View>


            <View
                style={styles.postContainer}
            >
                <View
                    style={styles.leftPart}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>

                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                marginRight: 10
                            }}
                            source={require("../../../assets/images/landing_avatar.jpg")}
                        />



                        <Text
                            style={{
                                fontFamily: fonts.mrB,
                                color: colors.black
                            }}>Welcome back!</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color="black" />


                </View>

                <FormInput
                contentType="emailAddress"
                    labelValue={email}
                    onChangeText={val => setSignupForm({ ...signupForm, email: val })}
                    placeholder="Email"
                    iconName="ios-person-circle-outline"
                />
                <FormInput
                    labelValue={password}
                    onChangeText={val => setSignupForm({ ...signupForm, password: val })}
                    placeholder="Password"
                    iconName="lock-open-outline"
                    isSecureTextEntry={true}
                />





                <View style={styles.leftPart}>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Ionicons
                            style={{ marginRight: 10 }}
                            name="ios-heart-outline"
                            size={24}
                            color={colors.black} />
                        <Ionicons
                            style={{ marginRight: 10 }}
                            name="chatbubble-outline"
                            size={24}
                            color={colors.black} />
                        <Ionicons
                            name="paper-plane-outline"
                            size={24}
                            color={colors.black} />
                    </View>
                    <TouchableOpacity
                        style={{
                            padding: 10,
                            backgroundColor: colors.black,
                            borderRadius: 5,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}

                        onPress={onSignIn}
                    >
                        <Text
                            style={{
                                fontFamily: fonts.mrB,
                                color: "white",
                                marginRight: 10
                            }}
                        >Sign In</Text>

                        <Ionicons name="arrow-forward-circle-outline" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{
                marginVertical: 15,
                fontFamily: fonts.mrM,
                color: "rgba(0,0,0, .5)"
            }}>Or</Text>

            <TouchableOpacity
                style={{
                    backgroundColor: colors.royalBlue,
                    paddingVertical: 10,
                    width: (width / 10) * 7.5,
                    alignItems: 'center',
                    borderRadius: 10,
                    marginBottom: 10
                }}>
                <Text
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: 14,
                        color: "white"
                    }}
                >Sign In with Facebook</Text>

            </TouchableOpacity>




        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e5e8ec",
        // justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        fontFamily: fonts.grE,
        fontSize: 18,
        color: colors.black
    },

    topBar: {
        width: "100%",
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',

    },
    postContainer: {
        marginTop: 15,
        width: (width / 10) * 9.5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10

    }
    ,

    leftPart: {
        width: (width / 10) * 8.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },

});

