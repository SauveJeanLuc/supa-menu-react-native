import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

var AppOrangeColor = "#F7941D";
var AppIntensiveOrangeColor = "rgb(255, 128, 0)";

// https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80
const PaymentOption = ({name, uri}) => {
    return (
        <View style={styles.payment}>
            <Image style={styles.paymentImage} source={{ uri: `${uri}`,}} />
            <Text style={styles.paymentText}>{name}</Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    payment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,

    },

    paymentImage: {
        flex: 1,
        width: 10,
        height: 80,
        marginLeft: 4,
        marginTop: 6,
    },

    paymentText: {
        flex: 2.4,
        fontSize: 19,
        color: 'grey',
        marginLeft: 30,
    }
})
export default PaymentOption;