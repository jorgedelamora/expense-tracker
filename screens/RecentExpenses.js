import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="last 7 days"/>
    </View>
  )
}

export default RecentExpenses