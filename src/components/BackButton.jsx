import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { AntDesign } from '@expo/vector-icons';
import tw from "twrnc";

const BackButton=({navigation})=>{
    return(
        <TouchableOpacity onPress={()=> navigation.goBack()} style={tw`flex justify-center bg-gray-100 rounded-md ml-3 p-2`}>
            <AntDesign name="left" size={16} style={tw`text-[#ee8b07]`}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top:10 + getStatusBarHeight(),
        left:4,
    },
    image:{
        width:24,
        height:24
    },
})

export default BackButton