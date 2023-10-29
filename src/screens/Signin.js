import React, { useState } from 'react';
import Style from '../Style/Style';
import axios from 'axios'
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native';
import Button from '../components/Button';
import InputReq from '../components/InputReq';

const Signin = ({ navigation }) => {
  const url = 'http://10.0.2.2:8000/api/signin'
  const [NID, setNID] = useState("");
  const [phone_number, setphoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sendData = async () => {
    try {
      setIsLoading(true);
      const body = {
        "NID": NID,
        "phone_number": phone_number,
      }
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
      const response = await axios.post(url, body, headers);
      console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", response.data);
      Alert.alert('Signed in successfully', "welcome to MediRX");
      setIsLoading(false);
      navigation.navigate('Home');
    } catch (error) {
      console.error("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error);
      Alert.alert('Sign in Failed', "Please enter a correct NID and phone number and try again");
      setIsLoading(false);
    }
  }

  const Intro = () => {
    return (

      // header frame 
      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>

        {/* font frame */}
        <View>
          <Text style={Style.headtitle}>Welcome to MediRx!</Text>
          <Text style={Style.subtitle} >Happy to see you here!</Text>
        </View>

        {/* logo frame */}
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
      <View style={{ marginTop: '5%', marginLeft: '5%', }}>
        <InputReq style={[Style.Textinput]} text={"Phone Number"} type={'numeric'} data={phone_number} setData={setphoneNumber} />
        <InputReq style={[Style.Textinput]} text={"Your NID"} type={'numeric'} data={NID} setData={setNID} />
        <View style={{ marginTop: '80%' }}>
          {isLoading ? (<ActivityIndicator color={'#000'} style={{ top: '10%' }} />) : (
            <Button style={Style.Button} title="Sign In" onPress={() => { sendData() }} />)}
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      {Intro()}
      {Section1()}
    </View>
  );
};

export default Signin;