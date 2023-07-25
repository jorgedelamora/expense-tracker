import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({ioniconsName, color = "white", size = 14, onPress}) => {


    const handleOnPress = () => {
        onPress && onPress();
    }   

  return (
    <Pressable onPress={handleOnPress} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.container}>
            <Ionicons name={ioniconsName} color={color} size={size} />
        </View>
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
})