import React, { useState } from 'react';
import Income from './Income';
import Expense from './Expense';
import SideBars from './SideBars';

import './CombineInEx.css';

function CombineInEx() {
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);

    const handleDeleteExpense = (index) => {
        const updatedExpenseList = expenseList.filter((_, i) => i !== index);
        setExpenseList(updatedExpenseList);
      };

      const handleDeleteIncome = (index) => {
        const updatedIncomeList = incomeList.filter((_, i) => i !== index);
        setIncomeList(updatedIncomeList);
      };

    const handleAction = ({ action, selectedBank, selectedTypes, incomeAmount }) => {
        if (action === "income") {
            setIncomeList([...incomeList, { bank: selectedBank, category: selectedTypes, amount: parseInt(incomeAmount) }]);
        } else if (action === "expense") {
            setExpenseList([...expenseList, { bank: selectedBank, category: selectedTypes, amount: parseInt(incomeAmount) }]);
        }
    };
    const totalIncome = incomeList.reduce((acc, item) => (acc += parseInt(item.amount)), 0);
    const totalExpense = expenseList.reduce((acc, item) => (acc += parseInt(item.amount)), 0);
    const balance = totalIncome - totalExpense;

    return(
        <>
        <div className='mainBar'>
            <div className='divCont'>
            <SideBars onAction={handleAction}/>
            <div className='secMainBar'>
            <div className="thirdCont">
                <h1 style={{textAlign: "center"}}>Balance: {balance}</h1>
            </div>
                <div className='fourthCont'>
                <div>
                <Income incomeList={incomeList} onDeleteIncome={handleDeleteIncome}/>
                <div style={{ marginTop: "20px"}}>
                <Expense expenseList={expenseList} onDeleteExpense={handleDeleteExpense}/>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default CombineInEx;