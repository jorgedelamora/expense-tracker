import React from 'react'
import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

const ExpensesOutput = ({expenses = [], expensesPeriod}) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput