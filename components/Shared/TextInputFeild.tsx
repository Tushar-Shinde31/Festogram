import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import { StyleSheet } from 'react-native'

type TextInputFeildProps = {
    label: string,
    onChangeText: (text: string) => void,
    password?: boolean,
}
export default function TextInputFeild({label,onChangeText,password=false}: TextInputFeildProps) {
  return (
    <View style={{ marginTop: 15}}>
      <Text style={{color: Colors.GRAY}}>{label}</Text>
      <TextInput placeholder={label} style={styles.TextInput} secureTextEntry={password} onChangeText={onChangeText}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  TextInput: {
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 5,
    marginTop: 5,
    fontSize: 17,

  }
})
