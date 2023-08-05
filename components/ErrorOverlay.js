import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles';
import Button from './Button';

const ErrorOverlay = ({message, onPressBtn, btnLabel = 'Okay'}) => {

    const handleOnPress = () => {
        onPressBtn && onPressBtn();
    }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An Error Ocurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={handleOnPress}>{btnLabel}</Button>
    </View>
  )
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        textAlign:'center',
        marginBottom:8,
        color: 'white'
    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
    }
})