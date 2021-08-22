import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabScreenHeader from '../../../components/TabScreenHeader'

export default function Explore({navigation}) {
    return (
        <View style={styles.container}>
            <TabScreenHeader screenName="Explore" navigation={navigation}/>

        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        // backgroundColor: "#e5e8ec"
    }
});