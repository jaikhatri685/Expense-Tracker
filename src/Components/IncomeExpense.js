import React from 'react'

export const IncomeExpense = ({netAmount}) => {
    return (
        <div className="incomeExpense inter text-lg tracking-wider mb-6 py-4">
            <div className="income flex flex-col items-center w-1/2 border-solid border-white border-r-2">
                <h3 className='pb-2'>INCOME</h3>
                <h1 className='text-lg font-bold'>${netAmount.income}</h1>
            </div> 
            <div className="expense flex flex-col items-center w-1/2"> 
                <h3 className='pb-2'>EXPENSE</h3>
                <h1 className='text-lg font-bold'>${netAmount.expense}</h1>

            </div>       
        </div>
    )
}
