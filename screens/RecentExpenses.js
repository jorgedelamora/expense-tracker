import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses'
import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {

  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  return <ExpensesOutput expensesPeriod="last 7 days" expenses={recentExpenses}/>

}

export default RecentExpenses