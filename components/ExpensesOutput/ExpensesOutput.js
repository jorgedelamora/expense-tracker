import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import {DUMMY_EXPENSES} from '../../data/dummyData';
import { GlobalStyles } from '../../constants/styles';

const ExpensesOutput = ({expenses = [], expensesPeriod}) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}


export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 24,
      backgroundColor: GlobalStyles.colors.primary700,
  }
})