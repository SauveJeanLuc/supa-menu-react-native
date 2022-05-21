import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { View,TextInput} from 'react-native';
import tw from 'twrnc';
import { theme } from '../core/theme';

const SearchInput = () => {
  return (
    <View style={tw`flex-row p-4 bg-white rounded-full`}>
        <FontAwesome name="search" size={24} color={`${theme.colors.primary}`} />
        <TextInput placeholder='Search for your prefered restaurant' style={tw`ml-2`} />
    </View>
  )
}
export default SearchInput;