import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Colors from '@/data/Colors'
import TextInputFeild from '@/components/Shared/TextInputFeild'
import Button from '@/components/Shared/Button'
import * as ImagePicker from 'expo-image-picker'
import { StyleSheet } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/configs/Firebase.Config'
import { upload} from 'cloudinary-react-native'
import { cld, options } from '@/configs/CloudinaryConfig'
import axios from 'axios'
import { router } from 'expo-router'

export default function SignUp() {
  const [profileImage, setProfileImage] = useState<string|undefined>();
  const [fullName, setFullName] = useState<string|undefined>();
  const [email, setEmail] = useState<string|undefined>();
  const [password, setPassword] = useState<string|undefined>();

  const onBtnPress = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show('Please fill all the fields', ToastAndroid.SHORT);
      return;
    }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        console.log(userCredentials);
        // upload Profile Image
          await upload(cld, {
            file: profileImage,
            options: options,
            callback: async(error: any, response: any) => {
              if(error){
                console.log(error);
              }
              if(response){
                console.log(response?.url);
                const result = await axios.post(process.env.EXPO_PUBLIC_HOST_URL + "/user",{
                  name: fullName,
                  email: email,
                  image: response?.url,
                })
                console.log(result);
                router.push('/landing')
              }
             }
          })
        // Save To Database
      })
      .catch((error) => {
        const errorMsg = error?.message;
        ToastAndroid.show(errorMsg, ToastAndroid.BOTTOM);
      });
  };
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };
  return (
    <View style={{ paddingTop: 60, padding: 20 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Create New Account</Text>

      <View style={{ display: 'flex', alignItems: 'center' }}>

        <View>
          <TouchableOpacity onPress={() => pickImage()}>
          {profileImage ?
          <Image source={{uri: profileImage}} style={styles.profileImage}/>
        :
          <Image
            source={require('./../../assets/images/profile.png')}
            style={styles.profileImage}
          />}
          <Ionicons
            name="camera"
            size={24}
            color={Colors.PRIMARY}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />
          </TouchableOpacity>
        </View>

        <TextInputFeild label='Full Name' onChangeText={(v)=> setFullName(v)}/>
        <TextInputFeild label='College Email' onChangeText={(v)=> setEmail(v)}/>
        <TextInputFeild label='Password' password={true} onChangeText={(v)=> setPassword(v)}/>

          <Button text='Create Account' onPress={()=>onBtnPress()}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileImage:{
    width: 100,
    height: 100,
  borderRadius: 99,
  }
})
