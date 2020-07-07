import React, { Component, PropTypes } from 'react';
import { sourceIcon } from '../src/source';
import {
    StyleSheet,
    Text,
    View, Image, ScrollView,
    TouchableOpacity,
    Alert,
    Dimensions
} from 'react-native';
import ImagePicker from "react-native-image-crop-picker";
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class UploadCMNDScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleCamera = (cropping, type) => {
        ImagePicker.openCamera({
            includeBase64: true,
            cropping: cropping,
            useFrontCamera: false,
            includeExif: true,
            compressImageQuality: 0.2,
        })
            .then(image => {
                console.log('image', image)
            })
            .catch(e => { });
    }
    render() {
        let cmtTruocElement = <TouchableOpacity onPress={() => {
            this.handleCamera(false, 1)
        }}>
            <Image style={{ width: 170, height: 170, marginTop: 6, resizeMode: 'contain' }} source={sourceIcon.imageupload1} />
        </TouchableOpacity>;
        let cmtSauElement = <TouchableOpacity onPress={() => {
            this.handleCamera(false, 2)
        }}>
            <Image style={{ width: 170, height: 170, marginTop: 6, resizeMode: 'contain' }} source={sourceIcon.imageupload2} />
        </TouchableOpacity>;
        return (
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <ScrollView>
                    <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', textAlign: 'center', marginTop: 30 }}>CHỤP ẢNH CMND/CĂN CƯỚC</Text>
                            <View style={{ alignContent: 'center', alignItems: 'center' }}>

                                <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 18, fontWeight: '600' }}>Mặt trước</Text>
                                {cmtTruocElement}

                            </View>
                            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                                <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 18, fontWeight: '600' }}>Mặt sau</Text>
                                {cmtSauElement}
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View
                                style={{
                                    width: DEVICE_WIDTH - 60,
                                    height: 50,
                                    marginBottom: 10,
                                    marginLeft: 10,
                                    borderRadius: 4,
                                    backgroundColor: "#218DE5",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
                                    Tiếp Tục
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
