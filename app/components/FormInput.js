import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts, height, width } from '../utils/constants'

export default function FormInput({ contentType, labelValue, iconName, placeholder, infoType, updateSecureTextEntry, isSecureTextEntry, check_textInputChange, isValidInfo, ...rest }) {
    return (
        <View style={styles.inputContainer}>


            <TextInput
                textContentType={contentType}
                // textContentType=
                style={styles.input}
                value={labelValue}
                placeholder={placeholder}
                secureTextEntry={isSecureTextEntry}
                {...rest} />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer: {

        marginTop: 5,
        marginBottom: 10,
        width: (width / 10) * 8.5,
        height: height / 15,
        // borderColor: colors.primary_pink,
        // borderRadius: 30,
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,.2)"

    },
    input: {
        padding: 5,
        flex: 1,
        fontSize: 14,
        fontFamily: fonts.mrM,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },


});