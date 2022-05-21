import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

var AppOrangeColor = "#F7941D";
var AppIntensiveOrangeColor = "rgb(255, 128, 0)";

const Victual = ({victual}) => {
    return (
        <View style={styles.victuals}>
            <View style={styles.victualImage}>
                <Image style={styles.tinyLogo} source={{ uri: `${victual.imageUrl}`,}} />
            </View>
            <View style={styles.victualInfo}>
                <Text style={styles.victualIngredients}>{victual.ingredients}</Text>
                <Text style={styles.victualName}>{victual.name}</Text>
                <View style={styles.victualAmountAction}> 
                    <Text style={styles.victualPrice}>Frw {victual.price}</Text>
                    <View style={styles.victualAmountActionIcon}>
                        <Icon name="minus" style={styles.icon}/>
                            <Text style={styles.victualAmount}> {victual.amount} </Text>
                        <Icon name="plus" style={styles.icon}/>
                    </View>
                </View>
            </View>
        </View>
    );
} 
const styles = StyleSheet.create({

    victuals: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 14,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        backgroundColor: "#f0f5fa",
        maxWidth: 400,
    },
    victualIngredients: {
        fontSize: 12.3,
        color: "grey",
    },
    icon: {
        fontSize: 14,
        color: AppOrangeColor,
    },
    tinyLogo: {
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    victualAmount: {
        fontSize: 17,
    },
    victualAmountAction: {
        flexDirection: 'row',
        flex: 1,
        marginTop:5,
    },
    victualPrice: {
        flex: 1,
        fontWeight: '900',
        color: AppIntensiveOrangeColor,
        fontSize: 18,
    },
    victualAmountActionIcon: {
        flexDirection: 'row',
        flex: 2,
        backgroundColor:  "rgb(253, 253, 253)",
        borderRadius: 4,
        maxWidth: 90,
        justifyContent: "center",
        alignItems: "center",
    },
    victualImage: {
        flex: 1,
        maxWidth: 60,
        marginTop: 3,
    },
    victualInfo: {
        marginLeft: 18,
        flex: 2,
        maxWidth: 350,
    },
    victualName: {
        fontWeight: 'bold',
    },

})
export default Victual;