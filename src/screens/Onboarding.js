import React from 'react'
import Style from '../Style/Style'
import Button from '../components/Button'
import { View, Text, Image } from 'react-native'

const Onboarding = ({navigation}) => {

  const content = () => {
    return (
      <View style={{ justifyContent: 'center' }}>
        <View style={{ marginTop: '30%', alignSelf: 'center' }}>
          <Image
            style={Style.Logo2}
            source={require('C:/Users/shaimaa/MediRx/src/assets/MediRxLogo.png')}
          />
        </View>
        <View style={{ margianTop: '10%', alignSelf: 'center', justifyContent: 'center', width: '60%' }}>
          <Text style={Style.title}>MediRx</Text>
          <Text style={Style.slogan}>Buy Prescribed Medications with Ease and Safety</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{flex:1}}>
      {content()}
      <View style={{ marginTop: '20%', alignSelf:'center' }}>
        <Button style={Style.Button} title="Sign In" onPress={() => navigation.navigate('Signin')}/>
      </View>
    </View>
  )
}

export default Onboarding