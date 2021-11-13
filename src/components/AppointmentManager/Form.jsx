import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

import { Subtitle, AlertMsg, Label, Input, Textarea, Button } from './styles'

const Form = ({ saveAppointment }) => {
  const [appointment, setAppointment] = useState({
    name: '',
    dni: '',
    healthInsurance: '',
    telephone: '',
    date: '',
    time: '',
    reason: '',
  })
  const [validationError, setValidationError] = useState(false)

  const { name, dni, healthInsurance, telephone, date, time, reason } = appointment

  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      name.trim() === '' ||
      dni.trim() === '' ||
      healthInsurance.trim() === '' ||
      telephone.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      reason.trim() === ''
    ) {
      setValidationError(true)
      return
    }
    setValidationError(false)
    appointment.id = uuid()
    saveAppointment(appointment)
    setAppointment({
      name: '',
      dni: '',
      healthInsurance: '',
      telephone: '',
      date: '',
      time: '',
      reason: '',
    })
  }

  return (
    <>
      <Subtitle>Asignar turno</Subtitle>

      {validationError && <AlertMsg>Todos los campos son obligatorios</AlertMsg>}

      <form onSubmit={handleSubmit}>
        <Label>Nombre completo</Label>
        <Input
          type="text"
          name="name"
          className="u-full-width"
          placeholder="Nombre y apellido del paciente"
          value={name}
          onChange={handleChange}
        />

        <Label>DNI</Label>
        <Input
          type="number"
          name="dni"
          className="u-full-width"
          placeholder="DNI del paciente"
          value={dni}
          onChange={handleChange}
        />

        <Label>Obra Social</Label>
        <Input
          type="text"
          name="healthInsurance"
          className="u-full-width"
          placeholder="Obra Social del paciente"
          value={healthInsurance}
          onChange={handleChange}
        />

        <Label>Teléfono</Label>
        <Input
          type="number"
          name="telephone"
          className="u-full-width"
          placeholder="Teléfono del paciente"
          value={telephone}
          onChange={handleChange}
        />

        <Label>Fecha</Label>
        <Input
          type="date"
          name="date"
          className="u-full-width"
          value={date}
          onChange={handleChange}
        />

        <Label>Hora</Label>
        <Input
          type="time"
          name="time"
          className="u-full-width"
          placeholder="Apellido del paciente"
          value={time}
          onChange={handleChange}
        />

        <Label>Motivo de consulta</Label>
        <Textarea
          name="reason"
          className="u-full-width"
          placeholder="Descripción del motivo de la consulta"
          value={reason}
          onChange={handleChange}
        ></Textarea>

        <Button type="submit" className="u-full-width button-primary">
          Agendar turno
        </Button>
      </form>
    </>
  )
}

Form.propTypes = {
  saveAppointment: PropTypes.func.isRequired,
}

export default Form
