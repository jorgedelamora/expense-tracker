import React, { useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import Input from './Input'
import Button from '../Button'
import { getFormattedDate } from '../../util/date'

const ExpenseForm = ({onCancel, onSubmit, submitBtnLabel = 'Submit', defaultValues}) => {
    const [formState, setFormState] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    const handleInputChange = (key, value) => {
        setFormState((prev) => ({...prev, [key]: value}));
    }

    const handleSubmit = () => {

        
        const expenseData = {
            amount: Number(formState.amount),
            date: new Date(formState.date),
            description: formState.description
        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if(amountIsValid && dateIsValid && descriptionIsValid) {
            onSubmit(expenseData);
            return;
        }

        Alert.alert('Invalid Input', 'Please check your inputs');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Your New Expense</Text>
        <View style={styles.inputsRow}>
            <Input 
                label="Amount"
                textInputProps={{
                    keyboardType: 'decimal-pad',
                    maxLength: 7,
                    onChangeText: (value) => handleInputChange('amount', value),
                    value: formState.amount
                }}
                styleContainer={styles.flex1}
            />
            <Input 
                label="Date" 
                textInputProps={{
                    placeholder: 'YYYY-MM-DD',
                    onChangeText: (value) => handleInputChange('date', value),
                    maxLength: 10,
                    value: formState.date
                }}
                styleContainer={styles.flex1}
            />
        </View>
        <Input label="Description" textInputProps={{
            onChangeText: (value) => handleInputChange('description', value),
            multiline: true,
            value: formState.description
        }}/>
        <View style={styles.buttonsContainer}>
            <Button containerStyle={styles.btn} variant="flat" onPress={onCancel}>Cancel</Button>
            <Button containerStyle={styles.btn} onPress={handleSubmit}>{submitBtnLabel}</Button>
      </View>
    </View>
  )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    container:{
        marginTop: 30
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 14
    },
    inputsRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flex1: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        minWidth: 120,
        margin: 8
    },
})