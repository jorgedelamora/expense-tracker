import { View, FlatList, Text} from 'react-native'
import React from 'react'

const ExpensesList = ({expenses = []}) => {

  const renderSingleExpense = ({item}) => {
    return (
      <Text>{item.description}</Text>
    )
  }

  return (
    <View>
      <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderSingleExpense} />
    </View>
  )
}

export default ExpensesList