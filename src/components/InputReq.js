import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputReq = ({text, style, type ,change , isSecure})=> {
    return (
      <TextInput style={style} placeholder={text} keyboardType={type}  onChangeText={change} secureTextEntry={isSecure}/>
    );
}

export default InputReq;