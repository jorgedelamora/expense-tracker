import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles';

const Button = ({children, onPress, variant, containerStyle }) => {
    const handleOnPress = () => {
        onPress && onPress();
    }

  return (
    <View style={containerStyle}>
        <Pressable onPress={handleOnPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={[styles.button, variant === 'flat' && styles.flat]}>
                <Text style={[styles.text, variant === 'flat' && styles.textFlat]}>{children}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },  
    flat: {
        backgroundColor: 'transparent',
    },
    textFlat: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius:4
    }
})