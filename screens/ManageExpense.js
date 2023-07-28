import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/Button';

const ManageExpense = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const expenseId = route.params?.expenseId;
  const isEditingExistingExpense = !!expenseId;

  const deleteExpense = () => {
    console.log('deleting');
    navigation.goBack();
  }

  const cancel = () => {
    console.log('canceling');
    navigation.goBack();
  }

  const confirm = () => {
    console.log('confirming');
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