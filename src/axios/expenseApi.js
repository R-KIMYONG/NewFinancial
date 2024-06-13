import axios from "axios";

export const expensesApi = axios.create({
  baseURL: "https://chlorinated-wax-wisteria.glitch.me/",
});

export const getExpenseList = async () => {
  try {
    const { data } = await expensesApi.get("expenses");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addExpense = async (newExpexse) => {
  try {
    const { data } = expensesApi.post("expenses", newExpexse);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatedExpense = async (updateditem) => {
  const { id, ...rest } = updateditem;
  try {
    const { data } = expensesApi.put(`expenses/${id}`, rest);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getExpenseById = async ({ queryKey }) => {
  try {
    const { data } = await expensesApi.get(`expenses/${queryKey[1]}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = expensesApi.put(`expenses/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
