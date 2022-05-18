import React from 'react';
import { StyleSheet, Image } from 'react-native';
function Home(props) {
    return (
    <Background style={styles.container}>
<Image src={"../assets/SuperMenu.svg"} style={styles.Image}/>

    </Background>
    );
}

const styles= StyleSheet.create({
    container:{
        backgroundColor: "ee8b07"
    },
    image:{
        width: "100px",
        height: "50px",
        justifyContent:"center",
        alignContent:"center"
    }
})

export default Home;