import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts, height, width } from '../../utils/constants';
import { Ionicons } from '@expo/vector-icons';
import Signup from './Signup';


export default function Landing({ navigation }) {
    return (
        <View
            style={styles.container}>
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
                                width: 25,
                                height: 25,
                                borderRadius: 15,
                                marginRight: 10
                            }}
                            source={require("../../../assets/images/landing_avatar.jpg")}
                        />
                        <Text
                            style={{
                                fontFamily: fonts.grE,
                            }}>Instaclone</Text>
                    </View>
                    <Ionicons name="ellipsis-horizontal" size={20} color="black" />


                </View>


                <Image
                    style={{
                        borderRadius: 15,
                        borderTopLeftRadius: 0,
                        width: (width / 10) * 7,
                        height: (width / 10) * 7
                    }}
                    source={require("../../../assets/images/landing.jpg")} />
                <View style={styles.leftPart}>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Ionicons
                            style={{ marginRight: 10 }}
                            name="ios-heart"
                            size={24}
                            color="#FD1D1D" />
                        <Ionicons
                            style={{ marginRight: 10 }}
                            name="chatbubble-outline"
                            size={24}
                            color="black" />
                        <Ionicons
                            name="paper-plane-outline"
                            size={24} color="black" />
                    </View>
                    <Ionicons name="ios-bookmark-outline" size={30} color="black" />
                </View>
            </View>

            <View>
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

                <TouchableOpacity
                    onPress={() => navigation.navigate("Signin")}
                    style={{
                        backgroundColor: colors.black,
                        paddingVertical: 10,
                        width: (width / 10) * 7.5,
                        alignItems: 'center',
                        borderRadius: 10
                    }}>
                    <Text
                        style={{
                            fontFamily: "Manrope-Bold",
                            fontSize: 14,
                            color: "white"
                        }}
                    >Sign In with Email</Text>
                </TouchableOpacity>
            </View>


            <Text
                style={{
                    fontFamily: "Manrope-Medium",
                    fontSize: 14
                }}>Not a member?
                <Text
                    onPress={() => navigation.navigate("Signup")}
                    style={{
                        fontFamily: "Manrope-Bold",
                        fontSize: 15
                    }}
                > Sign Up Now</Text> </Text>







        </View>




    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#e5e8ec"
    },
    postContainer: {
        width: (width / 10) * 7.5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10
    }
    ,
    appName: {
        fontFamily: "Billabong",
        fontSize: 25,
        color: colors.black,

    },
    leftPart: {
        width: (width / 10) * 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },

});
