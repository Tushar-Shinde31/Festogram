import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import { StyleSheet } from 'react-native'

type TextInputFeildProps = {
  label: string,
  onChangeText: (text: string) => void,
  password?: boolean,
}

export default function TextInputFeild({ label, onChangeText, password = false }: TextInputFeildProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={label}
        style={styles.TextInput}
        secureTextEntry={password}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '100%',
  },
  label: {
    color: Colors.GRAY,
    marginBottom: 5,
    fontSize: 14,
  },
  TextInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  }
})
