import React from 'react';
import {View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc';

const Input = ({Icon, placeholder}) => {
  return (
      <View style={tw`w-full mt-2 flex-row border p-4 rounded-[2] border-gray-200`}>
        {Icon}
         <TextInput placeholder={placeholder} style={tw`ml-2`}/>
      </View>
  )
}
export default Input;