import React from "react"
import {StyleSheet} from "react-native"
import {Text} from "react-native-paper"

export default function Paragraph(props){
    return <Text style={styles.text} {...props}/>
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        lineHeight:25,
        textAlign: 'center',
        marginBottom12,
        backgroundColor:'#f5f5f5',
    }
})