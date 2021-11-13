import React, { useState, useEffect } from 'react'
import Form from '../../components/AppointmentManager/Form'
import Appointment from '../../components/AppointmentManager/Appointment'
import { MainSection, PageContainer } from '../../styles/globalStyles'
import {
  Title,
  Subtitle,
  Container,
  SubContainer,
} from '../../components/AppointmentManager/styles'

function AppointmentManager() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
  if (!initialAppointments) initialAppointments = []

  const [appointments, setAppointments] = useState(initialAppointments)
  const title = appointments.length === 0 ? 'No hay turnos asignados' : 'Turnos asignados'

  useEffect(() => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments])

  const saveAppointment = (appointment) => {
    setAppointments([...appointments, appointment])
  }

  const deleteAppointment = (id) => {
    const remainingAppointments = appointments.filter((appointment) => appointment.id !== id)
    setAppointments(remainingAppointments)
  }

  return (
    <MainSection className="appointmentManager">
      <Title>Administrador de turnos</Title>
      <Container className="main">
        <SubContainer className="column">
          <Form saveAppointment={saveAppointment} />
        </SubContainer>
        <SubContainer className="column">
          <Subtitle>{title}</Subtitle>
          {appointments.map((appointment) => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </SubContainer>
      </Container>
    </MainSection>
  )
}

export default AppointmentManager
