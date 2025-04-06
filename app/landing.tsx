import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from '@/components/Shared/Button'

export default function LandingScreen() {
  return (
    <View>
       <Image
          source={require('./../assets/images/login.png')}
          style={{
            width: '100%',
            height: 480
          }}  
       />
       <View style={{
        padding: 20,
       }}>
        <Text style={{
            fontSize: 35,
            fontWeight: 'bold',
            textAlign: 'center',
        }}>Welcome to Festgram</Text>

        <Text style={{
            fontSize:17,
            textAlign: 'center',
            marginTop: 10,
            color: Colors.GRAY,
        }}>Your college news, Updates in your pocket, Join the club, Register for new event and Many More... </Text>

        <Button text='Get Started' onPress={() => console.log('Button Press')}/>

        <Text style={{
            fontSize: 16,
            textAlign: 'center',
            marginTop: 7,
            color: Colors.GRAY,
        }}>Aleady have an Account? Sign In Here</Text>
       </View>
    </View>
  )
}