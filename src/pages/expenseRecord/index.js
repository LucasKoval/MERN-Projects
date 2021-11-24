import React, { useState } from 'react'
import Expenses from '../../components/ExpenseRecord'
import NewExpense from '../../components/ExpenseRecord/NewExpense/NewExpense'
import INITIAL_EXPENSES from '../../data/initialExpenses'
import { MainSection } from '../../styles/globalStyles'
import { Title, Container, SubContainer } from '../../components/AppointmentManager/styles'

function ExpenseRecord() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <MainSection className="appointmentManager">
      <Title>Expense Record</Title>
      <Container className="main">
        <SubContainer>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </SubContainer>
      </Container>
    </MainSection>
  )
}

export default ExpenseRecord
