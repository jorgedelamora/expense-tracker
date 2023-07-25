import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import {DUMMY_EXPENSES} from '../../data/dummyData';

const ExpensesOutput = ({expenses = [], expensesPeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput