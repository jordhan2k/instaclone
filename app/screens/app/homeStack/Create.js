import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { width } from '../../../utils/constants';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Create = () => {
    const flashModes = [
        Camera.Constants.FlashMode.off,
        Camera.Constants.FlashMode.on,
        Camera.Constants.FlashMode.torch
    ];
    const flashIcons = [
        "ios-flash-off",
        "ios-flash",
        "ios-flashlight"
    ];
    const [flashMode, setFlashMode] = useState(parseInt(0));
    const [flashIcon, setFlashIcon] = useState(flashIcons[flashMode]);


    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);

    const [image, setImage] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);

    const onFlashModeChange = () => {
        setFlashMode((flashMode + 1) % 3);
        console.log(flashMode);
    }


    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync();
            console.log(data.uri);
            setImage(data.uri);
        }
    };

    useEffect(() => setFlashIcon(flashIcons[flashMode]), [flashMode]);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.camera}
                    type={type}
                    ratio="1:1"
                    autoFocus="on"
                    flashMode={flashModes[flashMode]}
                >

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={onFlashModeChange}
                        >
                            <Ionicons
                                // name={flashMode === 0 ? "ios-flash-off" : (1 ? "ios-flash" : 2 ? "ios-flashlight" : "")}
                                name={flashIcon}
                                size={30}
                                color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={takePicture}
                        >
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                backgroundColor: 'transparent',
                                borderWidth: 2,
                                borderColor: "white"
                            }}>
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "rgba(255, 255, 255, .7)",
                                    borderRadius: 25
                                }}></View>
                            </View>


                        </TouchableOpacity>




                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <MaterialIcons
                                name="flip-camera-android"
                                size={30}
                                color="white" />
                        </TouchableOpacity>
                    </View>
                </Camera>

            </View>
            <View style={{
                // backgroundColor: "black",

                width: 100,
                height: 100
            }}>
                {image && (<Image
                    style={{ width: "100%", height: "100%" }} source={{ uri: image }} />)}
            </View>



        </View>
    );
}

export default Create;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        width: width,
        height: width
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        // flex: 0.1,
        // alignSelf: 'flex-end',
        // alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});
