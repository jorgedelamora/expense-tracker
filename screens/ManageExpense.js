import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../context/expenses';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { storeExpense, updateExpense, deleteExpenseFromDB } from '../util/http';
import LoadingOverlay from '../components/LoadingOverlay';

const ManageExpense = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const expensesCtx = useContext(ExpensesContext);
  const expenseId = route.params?.expenseId;
  const isEditingExistingExpense = !!expenseId;
  const selectedExpense = expensesCtx.expenses.find((exp) => exp.id === expenseId);

  const deleteExpense = async () => {
    setLoading(true);
    expensesCtx.deleteExpense(expenseId);
    await deleteExpenseFromDB(expenseId);
    navigation.goBack();
  }

  const cancel = () => {
    navigation.goBack();
  }

  const confirm = async (expenseData) => {
    setLoading(true);
    if(isEditingExistingExpense){
      expensesCtx.updateExpense(expenseId, expenseData);
      await updateExpense(expenseId, expenseData);
    }else {
      const expenseId = await storeExpense(expenseData);
      expensesCtx.addExpense({...expenseData, id: expenseId});
    }
    navigation.goBack();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditingExistingExpense ? 'Edit Expense' : 'Add Expense'
    })
  },[navigation, isEditingExistingExpense]);

  if(loading) return <LoadingOverlay />

  return (
    <View style={styles.container}>
      <ExpenseForm 
        defaultValues={selectedExpense}
        onCancel={cancel} 
        onSubmit={confirm} 
        submitBtnLabel={isEditingExistingExpense ? 'Update' : 'Add'}
      />

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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})