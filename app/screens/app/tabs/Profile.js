import React, { useEffect } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import TabScreenHeader from '../../../components/TabScreenHeader';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { colors, fonts, width } from '../../../utils/constants';
import { Ionicons } from '@expo/vector-icons';
import UserInfoArea from '../../../components/UserInfoArea';


const Profile = ({ navigation, currentUser }) => {

    useEffect(() => {

        console.log(currentUser);

    }, [])
    return (
        <View style={styles.container}>
            <TabScreenHeader
                username={currentUser.username}
                screenName="Profile"
                navigation={navigation} />


            {/* avatar area */}
            <UserInfoArea />
            {/* avatar area ends  */}








            <Button

                onPress={() => {
                    firebase.auth().signOut().catch(error => console.log(error));
                }}
                title="Out"
            />
            <Text></Text>
        </View>
    )
}

Profile.propTypes = {
    currentUser: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
});
export default connect(mapStateToProps, {})(Profile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

});