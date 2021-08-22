import React, { useLayoutEffect } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, height, width } from '../../../utils/constants';
import firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import TabScreenHeader from '../../../components/TabScreenHeader';

const Home = ({ navigation }) => {


    return (
        <View 
        
        style={styles.container}>

            {/* Home header */}
            <TabScreenHeader screenName="Home" navigation={navigation}/>



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
                            source={require("../../../../assets/images/landing_avatar.jpg")}
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
                        width: (width / 10) * 9,
                        height: (width / 10) * 9
                    }}
                    source={require("../../../../assets/images/landing.jpg")} />
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


        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: "white",
        // backgroundColor: "#e5e8ec",
        // justifyContent: 'center'
        alignItems: 'center'
    },
  
    postContainer: {
        marginVertical: 10,
        width: (width / 10) * 9.5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2
    }
    ,
    appName: {
        fontFamily: "Billabong",
        fontSize: 25,
        color: colors.black,

    },
    leftPart: {
        width: (width / 10) * 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
});

export default Home;