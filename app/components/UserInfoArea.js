import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts, width, colors } from '../utils/constants'

const UserInfoArea = () => {
    return (
        <View style={styles.avatarArea} >
            <View style={styles.avatarSidePart}>
                <Text style={styles.followNumber}>10</Text>
                <Text style={styles.followText}>followers</Text>
            </View>

            <View
                style={styles.avatarContainer}
            >
                <Image
                    style={styles.avatar}
                    source={require("../../assets/images/landing_avatar.jpg")} />
                <TouchableOpacity
                    style={styles.createButtonContainer}
                >
                    <Ionicons
                        // style={{

                        // }}
                        name="add-circle" size={32} color={colors.gray} />
                </TouchableOpacity>

            </View>


            <View style={styles.avatarSidePart}>
                <Text style={styles.followNumber}>10</Text>
                <Text style={styles.followText}>following</Text>
            </View>

        </View>
    )
}

export default UserInfoArea;

const styles = StyleSheet.create({
    avatarArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },

    avatarContainer: {
        marginHorizontal: 25,
        width: width * 0.25,
        height: width * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.gray
    },
    avatar: {
        width: "90%",
        height: "90%",
        borderRadius: 100
    },

    createButtonContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: "white",
        borderRadius: 20,

        bottom: -12
    },
    avatarSidePart: {
        alignItems: 'center'
    }
    ,
    followNumber: {
        fontFamily: fonts.mrB,
        fontSize: 13
    },
    followText: {
        fontSize: 12,
        fontFamily: fonts.mrR,
        color: colors.gray
    }
})
