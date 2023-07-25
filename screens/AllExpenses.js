import { View, Text } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const AllExpenses = () => {
  return (
    <View>
      <ExpensesOutput expensesPeriod="total"/>
    </View>
  )
}

export default AllExpenses