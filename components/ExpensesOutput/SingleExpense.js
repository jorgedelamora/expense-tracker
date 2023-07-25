import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const SingleExpense = ({expense}) => {
    GlobalStyles
    const dateAsString = new Date(expense.date).toDateString();

  return (
    <Pressable>
        <View style={styles.container}>
            <View>
                <Text style={[styles.textBase, styles.description]}>{expense.description}</Text>
                <Text style={styles.textBase}>{dateAsString}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{expense.amount.toFixed(2)}</Text>
            </View>
        </View>
    </Pressable>
  )
}
export default SingleExpense;

const styles = StyleSheet.create({
    container: {
        padding:12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation:3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.4
    },
    textBase: {
        color:GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom:4,
        fontWeight:'bold'
    },
    amountContainer:{
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    }
})