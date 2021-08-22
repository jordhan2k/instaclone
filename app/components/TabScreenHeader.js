import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { colors, fonts, height, width } from '../utils/constants';

const TabScreenHeader = ({ screenName, navigation, username }) => {

    let body;

    switch (screenName) {
        case "Home":
            body = (
                <>
                    <Text
                        style={{
                            fontFamily: fonts.grE,
                            fontSize: 14
                        }}>
                        Instaclone</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            style={{
                                marginRight: 20
                            }}
                            onPress={() => navigation.navigate("Create")} >
                            <FontAwesome
                                name="plus-square-o"
                                size={25}
                                color={colors.black} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Direct")} >
                            <Ionicons
                                name="paper-plane-outline"
                                size={25}
                                color={colors.black} />
                        </TouchableOpacity>

                    </View>
                </>);
            break;
        case "Explore":
            body = (<TouchableOpacity
                onPress={() => navigation.navigate("Search")}
                style={styles.inputContainer}>
                <Text
                    style={styles.input}
                > Search</Text>
                <Ionicons name="ios-search-outline" size={30} color="rgba(0,0,0, .2)" />
            </TouchableOpacity>)
            break;

        case "Reel":
            break;
        case "Activity":
            break;
        case "Profile":
            body = (
                <>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Create")} >
                        <Ionicons
                            name="settings-sharp"
                            size={22}
                            color={colors.gray} />
                    </TouchableOpacity>

                    <Text
                        style={{
                            fontFamily: fonts.grE,
                            fontSize: 18
                        }}>
                        {username}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Direct")} >
                            <Ionicons
                                name="ios-list"
                                size={25}
                                color={colors.gray} />
                        </TouchableOpacity>

                    </View>
                </>);


            break;


        default:
            body = null;
    }


    return (
        <View style={styles.header}>
            {body}
        </View>
    )
}

export default TabScreenHeader

const styles = StyleSheet.create({

    header: {
        paddingHorizontal: 15,
        width: width,
        height: height * 0.07,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.05)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inputContainer: {
        paddingHorizontal: 10,
        width: "100%",
        height: "80%",
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: "rgba(0,0,0, .2)",
        borderRadius: 5
    },
    input: {
        flex: 1,
        fontFamily: fonts.mrM,
        fontStyle: 'italic',
        color: "rgba(0,0,0, .2)"
    }


});
