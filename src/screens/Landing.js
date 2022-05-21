import React from 'react';
import { StyleSheet,View} from 'react-native';

import SVGImg from '../assets/supe.svg';

// import { View } from 'react-native-web';
export default function Landing() {
    return (
    <View style={styles.container}>

<SVGImg width={200} height={200} style={styles.menu} fill="#000"/>
    </View>
    );
}


const styles= StyleSheet.create({
    container:{
        backgroundColor: '#ee8b07',
        height: '100%'
    },
    menu:{
     
        marginTop: '70%',
        marginLeft:'20%'
    }
})
