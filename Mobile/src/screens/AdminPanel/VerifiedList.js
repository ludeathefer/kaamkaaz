import { View, Text, Image, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'
import { verticalScale, moderateScale, horizontalScale } from '../../constants/measurements'
import ImageView from "react-native-image-viewing"
import { TouchableOpacity } from 'react-native-gesture-handler';

const VerifiedList = () => {
    const [modal, setModal] = useState(false);
    const [imageUrl, setImageUrl] = useState("https://www.scaler.com/topics/images/course_card_image_pybeg.webp")

    const [visible, setIsVisible] = useState(false);
    const images = [
        {
            uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
        },
        {
            uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
        },
        {
            uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
        },
    ];

    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#fff', justifyContent: 'flex-start' }}>

            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: verticalScale(60), marginLeft: horizontalScale(0), marginBottom: verticalScale(12) }} >

                <View style={{ flexDirection: "column", }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: moderateScale(19), fontFamily: 'Inter-Bold' }}> Verified List</Text>
                    </View>

                </View>

                <Image source={require('../../../assets/Icons/logout.png')} style={{ height: verticalScale(36), width: moderateScale(36) }} />
            </View>



            <View style={{ flexDirection: "column", width: "95%", margin: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={{ ...styles.twenty, fontFamily: 'Inter-SemiBold' }}>Name</Text>
                    <Text style={{ ...styles.twenty, fontFamily: 'Inter-SemiBold' }}>Service</Text>
                    <Text style={{ ...styles.forty, fontFamily: 'Inter-SemiBold' }}>Documents</Text>
                    <Text style={styles.twenty}>Remove</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={styles.twenty}>John Doe</Text>
                    <Text style={styles.twenty}>Plumning</Text>
                    <TouchableOpacity onPress={() => {setIsVisible(true)}}>
                       <Text style={styles.forty}>CTEVT Plumbing Certification</Text>
                    </TouchableOpacity>
                    <View style={{ ...styles.twenty, backgroundColor: '#e85f5c', borderRadius: 15, marginLeft: -100}}><Text style={{ fontFamily: 'Inter-SemiBold', color: "#fff" }}>Remove</Text></View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={styles.twenty}>John Doe</Text>
                    <Text style={styles.twenty}>Plumning</Text>
                    <TouchableOpacity onPress={() => {setIsVisible(true)}}>
                       <Text style={styles.forty}>CTEVT Plumbing Certification</Text>
                    </TouchableOpacity>
                    <View style={{ ...styles.twenty, backgroundColor: '#e85f5c', borderRadius: 15, marginLeft: -100}}><Text style={{ fontFamily: 'Inter-SemiBold', color: "#fff" }}>Remove</Text></View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={styles.twenty}>John Doe</Text>
                    <Text style={styles.twenty}>Plumning</Text>
                    <TouchableOpacity onPress={() => {setIsVisible(true)}}>
                       <Text style={styles.forty}>CTEVT Plumbing Certification</Text>
                    </TouchableOpacity>
                    <View style={{ ...styles.twenty, backgroundColor: '#e85f5c', borderRadius: 15, marginLeft: -100}}><Text style={{ fontFamily: 'Inter-SemiBold', color: "#fff" }}>Remove</Text></View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={styles.twenty}>John Doe</Text>
                    <Text style={styles.twenty}>Plumning</Text>
                    <TouchableOpacity onPress={() => {setIsVisible(true)}}>
                       <Text style={styles.forty}>CTEVT Plumbing Certification</Text>
                    </TouchableOpacity>
                    <View style={{ ...styles.twenty, backgroundColor: '#e85f5c', borderRadius: 15, marginLeft: -100}}><Text style={{ fontFamily: 'Inter-SemiBold', color: "#fff" }}>Remove</Text></View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginBottom: 8 }}>
                    <Text style={styles.twenty}>John Doe</Text>
                    <Text style={styles.twenty}>Plumning</Text>
                    <TouchableOpacity onPress={() => {setIsVisible(true)}}>
                       <Text style={styles.forty}>CTEVT Plumbing Certification</Text>
                    </TouchableOpacity>
                    <View style={{ ...styles.twenty, backgroundColor: '#e85f5c', borderRadius: 15, marginLeft: -100}}><Text style={{ fontFamily: 'Inter-SemiBold', color: "#fff" }}>Remove</Text></View>
                </View>

            </View>


            <ImageView
                images={images}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />

        </View>
    )
}
export default VerifiedList

const styles = StyleSheet.create({
    twenty: {
        width: "20%",
        fontFamily: "Inter-Regular",
        justifyContent: "center",
        alignItems: "center",
    },
    forty: {
        width: "40%",
        fontFamily: "Inter-Regular",
        justifyContent: 'center',
    },
    sixty: {
        width: "60%",
        fontFamily: "Inter-Regular",
        justifyContent: 'center',
    },

});