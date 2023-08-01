import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Input from './Input'
import Button from '../Button'
import { getFormattedDate } from '../../util/date'
import { GlobalStyles } from '../../constants/styles'

const ExpenseForm = ({onCancel, onSubmit, submitBtnLabel = 'Submit', defaultValues}) => {
    const [formState, setFormState] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
          },
          date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
          },
          description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
          },
    });

    const handleInputChange = (key, value) => {
        setFormState((prev) => ({...prev, [key]: {value, isValid: true}}));
    }

    const handleSubmit = () => {

        
        const expenseData = {
            amount: Number(formState.amount.value),
            date: new Date(formState.date.value),
            description: formState.description.value
        }
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setFormState((prev) => {
                return {
                  amount: { value: prev.amount.value, isValid: amountIsValid },
                  date: { value: prev.date.value, isValid: dateIsValid },
                  description: {
                    value: prev.description.value,
                    isValid: descriptionIsValid,
                  },
                };
              });
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid =
    !formState.amount.isValid ||
    !formState.date.isValid ||
    !formState.description.isValid;


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Your New Expense</Text>
        <View style={styles.inputsRow}>
            <Input 
                invalid={!formState.amount.isValid}
                label="Amount"
                textInputProps={{
                    keyboardType: 'decimal-pad',
                    maxLength: 7,
                    onChangeText: (value) => handleInputChange('amount', value),
                    value: formState.amount.value
                }}
                styleContainer={styles.flex1}
            />
            <Input 
                invalid={!formState.date.isValid}
                label="Date" 
                textInputProps={{
                    placeholder: 'YYYY-MM-DD',
                    onChangeText: (value) => handleInputChange('date', value),
                    maxLength: 10,
                    value: formState.date.value
                }}
                styleContainer={styles.flex1}
            />
        </View>
        <Input 
            invalid={!formState.description.isValid}
            label="Description" 
            textInputProps={{
                onChangeText: (value) => handleInputChange('description', value),
                multiline: true,
                value: formState.description.value
            }}
        />
        {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
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
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    },
})