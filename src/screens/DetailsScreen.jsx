//@ts-nocheck
import React from "react";
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = (props) => {
    return (
      <SafeAreaProvider style={{ backgroundColor: 'black'}}>
        <View style={{ marginTop: 100}}>
          <Text style={{ textAlign: 'center', color: '#F7941C', fontWeight: 900, fontSize: 25 }}>Choose Kigali</Text>
          <View style={{ flexDirection: 'row', marginHorizontal: 40, marginTop: 50}}>
            <View style={{ marginHorizontal: 20, borderRightColor:  "#F7941C", borderRightWidth: 1, paddingRight : 30}}>
              <View style={{ flexDirection: 'row'}}> 
                <Icon name="space-shuttle" size={30} color="#F7941C" />
                <Text style={{ color: 'white', fontSize: 24, marginLeft: 10}}>N8</Text>
              </View>
                <Text style={{ color: 'white', fontSize: 24, marginLeft: 10, marginTop: 20, fontWeight: 900}}>Ordered</Text>
            </View>
            <View>
              <View style={{ flexDirection: 'row', marginLeft: 34}}> 
                <Icon name="space-shuttle" size={30} color="#F7941C" />
              </View>
                <Text style={{ color: 'white', fontSize: 24, opacity: 0.6, marginLeft: 10, marginTop: 20, fontWeight: 900}}>Call Waiter</Text>
            </View>
          </View>
          <Text style={{ textAlign: 'center', color: '#F7941C', fontWeight: 900, fontSize: 25, marginTop: 60, marginBottom: 40 }}>menu</Text>
          <View style={{ marginLeft: 60}}>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={{ color: 'white', fontSize: 25, width: 200, marginLeft: 50, opacity: 0.8, fontWeight: 300 }}>Appetizer</Text>
                  <Icon name="angle-right" size={30} color="white" />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'white', fontSize: 25, width: 200, marginLeft: 50, opacity: 0.8, fontWeight: 300 }}>Starter</Text>
                  <Icon name="angle-right" size={30} color="white" />
              </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'white', fontSize: 25, width: 200, marginLeft: 50, opacity: 0.8, fontWeight: 300 }}>Main</Text>
                  <Icon name="angle-right" size={30} color="white" />
              </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'white', fontSize: 25, width: 200, marginLeft: 50, opacity: 0.8, fontWeight: 300 }}>Dessert</Text>
                  <Icon name="angle-right" size={30} color="white" />
              </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Text style={{ color: 'white', fontSize: 25, width: 200, marginLeft: 50, opacity: 0.8, fontWeight: 300 }}>Drink</Text>
                  <Icon name="angle-right" size={30} color="white" />
              </View>
          </View>
        </View>
      </SafeAreaProvider>
    )
}