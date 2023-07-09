import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 300, date: new Date(2022, 12, 24) },
  { title: "Toilet Paper", amount: 100, date: new Date(2022, 12, 20) },
  { title: "Pizza", amount: 500, date: new Date(2022, 12, 28) },
];
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=>{
    setExpenses(prevExpenses => {
      return [expense , ...prevExpenses]
    }); 
  };
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler } ></NewExpense>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
