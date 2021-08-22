import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { connect, Provider } from 'react-redux';

import { fetchUser } from '../store/actions';
import store from '../store/store';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/constants';
import { TextInput } from 'react-native';
import Home from "../screens/app/tabs/Home";
import Explore from "../screens/app/tabs/Explore";
import Reel from "../screens/app/tabs/Reel";
import Activity from "../screens/app/tabs/Activity";
import Profile from "../screens/app/tabs/Profile";
import AllTypeCreate from '../screens/app/tabs/AllTypeCreate';

const EmptyScreen = () => null;

// const BottomTab = createBottomTabNavigator();

const BottomTab = createMaterialTopTabNavigator();


const AppTabs = ({ currentUser, fetchUser }) => {
    useEffect(() => {
        fetchUser();
    }, [])

    return (
        <BottomTab.Navigator
            tabBarPosition="bottom"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.black,
                tabBarPressColor: " #9BC957",
                tabBarPressOpacity: 0.2,
                tabBarIndicatorStyle: {
                    height: 0
                },

                // custom icons on tabBar
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Explore') {
                        iconName = focused
                            ? 'ios-search'
                            : 'ios-search-outline';
                    } else if (route.name === 'Reel') {
                        iconName = focused
                            ? 'ios-aperture'
                            : 'ios-aperture-outline';
                    } else if (route.name === 'Activity') {
                        iconName = focused
                            ? 'ios-heart'
                            : 'ios-heart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'ios-person-circle'
                            : 'ios-person-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={25} color={color} />;
                }
            })}
        >

            <BottomTab.Screen
                name="Home"
                component={Home}
            />

            <BottomTab.Screen
                name="Explore"
                component={Explore}
            />

            <BottomTab.Screen
                name="Reel"
                component={Reel}
            />

            <BottomTab.Screen
                name="Activity"
                component={Activity}
            />

            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    // title: currentUser.username ? currentUser.username : 'Profile'

                }}
            />
        </BottomTab.Navigator>


    )
}
// Way 1:
AppTabs.propTypes = {
    fetchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({

    currentUser: state.user.currentUser
});
export default connect(mapStateToProps, { fetchUser })(AppTabs);

// Way 2: 
// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchUser
// }, dispatch);

// export default connect(null, {mapDispatchToProps})(AppTabs);

