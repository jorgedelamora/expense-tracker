import React, { useContext, useEffect, useRef, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../context/expenses'
import { getDateMinusDays } from '../util/date';
import { getExpenses } from '../util/http';
import LoadingOverlay from '../components/LoadingOverlay';
import ErrorOverlay from '../components/ErrorOverlay';

const RecentExpenses = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const refetch = useRef(false);

  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  })

  const handleError = () => {
    setError(false);
    refetch.current = true;
  }

  useEffect(() => {
    if(refetch.current) {
      refetch.current = false;
    }

    const fetchExpenses = async () => {
      try {
        const expenses = await getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError(error);
      }finally{
        setLoading(false);
      }
    }

    fetchExpenses();
  },[refetch.current])

  if(error && !loading) return <ErrorOverlay message={error.message || 'Could not fetch data'} onPressBtn={handleError} btnLabel="retry" />

  if(loading) return <LoadingOverlay/>

  return <ExpensesOutput expensesPeriod="last 7 days" expenses={recentExpenses}/>

}

export default RecentExpenses;