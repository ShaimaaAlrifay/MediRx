import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputReq = ({text, style, type ,data, setData , isSecure})=> {
    return (
      <TextInput style={style} 
      placeholder={text} 
      keyboardType={type}  
      value={data}
      onChangeText={text => setData(text)}
      secureTextEntry={isSecure}/>
    );
}

export default InputReq;