import { View, TextInput, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const Input = ({label, textInputProps, styleContainer = null}) => {

    const inputStyles = [styles.input, textInputProps?.multiline ? styles.inputMultiline : null];

  return (
    <View style={[styles.container, styleContainer]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={inputStyles} {...textInputProps} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label:{
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize:18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
})