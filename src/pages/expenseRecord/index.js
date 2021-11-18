import React from 'react'
import { MainSection } from '../../styles/globalStyles'
import { Title, Container, SubContainer } from '../../components/AppointmentManager/styles'

function ExpenseRecord() {
  return (
    <MainSection className="appointmentManager">
      <Title>Registro de Gastos</Title>
      <Container className="main">
        <SubContainer className="column"></SubContainer>
      </Container>
    </MainSection>
  )
}

export default ExpenseRecord
