import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from './styles'

const Appointment = ({ appointment, deleteAppointment }) => (
  <Container className="appointment">
    <p>
      Paciente: <span>{appointment.name}</span>
    </p>
    <p>
      DNI: <span>{appointment.dni}</span>
    </p>
    <p>
      Obra social: <span>{appointment.healthInsurance}</span>
    </p>
    <p>
      Teléfono: <span>{appointment.telephone}</span>
    </p>
    <p>
      Fecha: <span>{appointment.date}</span>
    </p>
    <p>
      Hora: <span>{appointment.time}</span>
    </p>
    <p>
      Motivo de consulta: <span>{appointment.reason}</span>
    </p>

    <Button
      className="button delete u-full-width"
      onClick={() => deleteAppointment(appointment.id)}
    >
      Eliminar
    </Button>
  </Container>
)

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
}

export default Appointment
