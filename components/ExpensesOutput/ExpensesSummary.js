import { View, Text } from 'react-native'
import React from 'react'

const ExpensesSummary = ({expenses = [], expensesPeriod = 'Last 7 Days'}) => {

    const expensesSum = expenses.reduce((prev, current) => {
        return prev + current.ammount
    }, 0);

  return (
    <View>
      <Text>{expensesPeriod}</Text>
      <Text>{expensesSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary