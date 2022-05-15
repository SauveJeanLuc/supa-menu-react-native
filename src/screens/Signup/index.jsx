import React  from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from 'twrnc';

const Signup = () => {
    const {container} = styles;
    return (
        <View style={tw`h-[100%]  justify-around items-center`}>
            <Text>Sign up</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:'100%',
        justifyContent:'space-around',
        alignItems: 'center'
    }
})
export default Signup;