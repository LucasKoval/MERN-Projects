import React, { /* useState, */ useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoDocumentTextOutline } from 'react-icons/io5'
import { GlobalContext } from '../../services/context/GlobalContext'

import { HeaderSection, Title, ImageContainer } from './styles'

const Header = () => {
  const { themeStyle, setThemeStyle } = useContext(GlobalContext)
  /* const [selected, setSelected] = useState(false) */

  const themeToggler = () => {
    themeStyle === 'light' ? setThemeStyle('dark') : setThemeStyle('light')
  }

  return (
    <HeaderSection className="HeaderSection">
      <ImageContainer className="burger">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className="menu">
          <Link to="/">
            <IoHomeOutline />
            <li>Home</li>
          </Link>
          <Link to="/appointment-manager">
            <IoDocumentTextOutline />
            <li>Appointment Manager</li>
          </Link>
          <Link to="/expense-record">
            <IoDocumentTextOutline />
            <li>Expense Record</li>
          </Link>
          <Link to="/new-app">
            <IoDocumentTextOutline />
            <li>New App</li>
          </Link>
        </ul>
      </ImageContainer>

      <Link to="/">
        <Title>MERN Projects</Title>
      </Link>

      <ImageContainer className="themeToogle" onClick={() => themeToggler()}>
        <img
          src="/icon/themeToogle.png"
          alt="SearchIcon"
          width="40"
          height="40"
          className="themeToogle"
        />
      </ImageContainer>
    </HeaderSection>
  )
}

export default Header
