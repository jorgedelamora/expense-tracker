import axios from "axios"

const BACKEND_URL = 'https://react-native-demo-33344-default-rtdb.firebaseio.com/';

export const storeExpense = async (expenseData) => {
    const response = await axios.post(BACKEND_URL + 'expenses.json',
    expenseData
    );
    const id = response.data.name;
    return id;
}
export const getExpenses = async () => {
    const response = await axios.get(BACKEND_URL + 'expenses.json');
    const expenses = [];

    for (const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }

    return expenses;
}

export const updateExpense = async (id, updatedExpenseData) => {
    const response = await axios.put(BACKEND_URL + `/expenses/${id}.json`, updatedExpenseData);
    return response;
}

export const deleteExpenseFromDB  = async (id) => {
    const response = await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
    return response;
}