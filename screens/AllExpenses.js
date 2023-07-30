import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses'


const AllExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="total"/>
}

export default AllExpenses