import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../data/dummyData";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description,amount, date}) => {},
});

const expensesReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            const id = new Date().toString + Math.random().toString();
            return [{...action.payload, id}, ...state];
        case 'UPDATE':
            const expenseToUpdateIdx = state.findIndex((expense) => expense.id === action.payload.id);
            const expenseToUpdate = state[expenseToUpdateIdx];
            const updatedItem = {...expenseToUpdate, ...action.payload.data}
            const updatedExpenses = [...state];
            updatedExpenses[expenseToUpdateIdx] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state
    }


}

const ExpensesContextProvider = ({children}) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData) => {
        dispatch({type: 'ADD', payload: expenseData});
    }

    const deleteExpense = (id) => {
        dispatch({type: 'DELETE', payload: id});
    }

    const updateExpense = (id, expenseData) => {
        dispatch({type: 'UPDATE', payload: {id, data: expenseData}})
    }

    const  value = {
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense
    }

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesContextProvider;