import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/Button';
import { ExpensesContext } from '../context/expenses';

const ManageExpense = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditingExistingExpense = !!expenseId;

  const deleteExpense = () => {
    expensesCtx.deleteExpense(expenseId);
    navigation.goBack();
  }

  const cancel = () => {
    navigation.goBack();
  }

  const confirm = () => {
    if(isEditingExistingExpense){
      expensesCtx.updateExpense(expenseId, {description: 'test editing', amount:19.99, date: new Date('2022-05-19')})
    }else {
      expensesCtx.addExpense({description: 'test adding', amount:19.99, date: new Date('2022-05-20')})
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditingExistingExpense ? 'Edit Expense' : 'Add Expense'
    })
  },[navigation, isEditingExistingExpense]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button containerStyle={styles.btn} variant="flat" onPress={cancel}>Cancel</Button>
        <Button containerStyle={styles.btn} onPress={confirm}>{isEditingExistingExpense ? 'Update' : 'Add'}</Button>
      </View>
      {isEditingExistingExpense &&
       <View style={styles.deleteContainer}>
         <IconButton ioniconsName='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpense}/>
        </View>
      }
    </View>
  )
}

export default ManageExpense;

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor: GlobalStyles.colors.primary800
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})