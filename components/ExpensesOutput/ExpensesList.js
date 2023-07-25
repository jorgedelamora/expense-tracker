import { View, FlatList, Text} from 'react-native'
import React from 'react'
import SingleExpense from './SingleExpense'

const ExpensesList = ({expenses = []}) => {

  const renderSingleExpense = ({item}) => {
    return <SingleExpense expense={item}/>
  }

  return (
    <View>
      <FlatList data={expenses} keyExtractor={(item) => item.id} renderItem={renderSingleExpense} />
    </View>
  )
}

export default ExpensesList