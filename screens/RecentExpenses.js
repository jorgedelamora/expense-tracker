import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses'
import { getDateMinusDays } from '../util/date';
import { getExpenses } from '../util/http';
import LoadingOverlay from '../components/LoadingOverlay';

const RecentExpenses = () => {

  const [loading, setLoading] = useState(true);

  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  useEffect(() => {
    const fetchExpenses = async () => {
      const expenses = await getExpenses();
      setLoading(false);
      expensesCtx.setExpenses(expenses);
    }

    fetchExpenses();
  },[])

  if(loading) return <LoadingOverlay/>

  return <ExpensesOutput expensesPeriod="last 7 days" expenses={recentExpenses}/>

}

export default RecentExpenses;