import React, {useState} from 'react';
import Style from '../Style/Style';
import {
  View,
  Image,
  Text,
} from 'react-native';
import Button from '../components/Button';
import InputReq from '../components/InputReq';


const Signin = ({navigation}) => {

  const Intro = () => {
    return (

      // header fram 
      <View style={{ flexDirection: 'row', paddingVertical: 10}}>

        {/* font fram */}
        <View>
          <Text style={Style.headtitle}>Welcome to MediRx!</Text>
          <Text style={Style.subtitle} >Happy to see you here!</Text>
        </View>

        {/* logo fram */}
        <View>
        <Image
          style={Style.Logo1}
          source={require('C:/Users/shaimaa/MediRx/src/assets/MediRxLogo.png')}
        />
        </View>
      </View>
    );
  };

  const Section1 = () => {
    return (
      <View style={{ marginTop: '5%', marginLeft: '5%',  }}>
        <InputReq style={[Style.Textinput]} text={"Phone Number"} type={'numeric'} change={(value) => setPhone(value)} />
        <InputReq style={[Style.Textinput]} text={"Your NID"} change={(value) => setEmail(value)} />

        <View style={{ marginTop: '80%' }}>
        <Button style={Style.Button} title="Sign In" onPress={() => navigation.navigate('Onboarding')} />
        </View>
      </View>
    );
  };

  return (
    <View style={{backgroundColor:'white', flex:1}}>
      {Intro()}
      {Section1()}
    </View>
  );
};

export default Signin;