import styled from 'styled-components'

export const Container = styled.div`
  &.main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 2rem;
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      flex-flow: column;
      justify-content: center;
    }
  }
  &.appointment {
    width: 100%;
    padding: 2rem;
    padding-top: 1rem;
    background: white;
    border-bottom: 1px solid #e1e1e1;
    p {
      color: #203a43;
      font-weight: bold;
      margin-bottom: 0.8rem;
      span {
        font-weight: normal;
      }
    }
    :first-of-type {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
    :last-of-type {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
`

export const SubContainer = styled.div`
  &.column {
    width: 30%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    align-self: baseline;
    @media (max-width: ${({ theme }) => theme.device.mobile}) {
      padding: 0 1.5rem;
      width: 100%;
    }
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;
  background: ${({ theme }) => theme.color.lightBlue};
  border: none;
  align-self: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background: #009dc0;
    transition: all 0.4s ease;
  }
  &:focus,
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    outline: none;
    border: 1px solid #a6a6a6;
    background: #f3f5f6;
    color: #a6a6a6;
    cursor: default;
  }
  &.delete {
    background: ${({ theme }) => theme.color.coral};
    border: none;
    margin-top: 0.5rem;
    &:hover {
      background: #e55c56;
      transition: all 0.4s ease;
    }
  }
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    &.delete {
      margin-bottom: 0;
    }
  }
`

export const Title = styled.h1`
  padding-top: 2rem;
  margin-bottom: 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Staatliches', cursive;
  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    padding: 0 1rem;
  }
`
export const Subtitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Staatliches', cursive;
  letter-spacing: 1px;
`

export const Label = styled.label`
  font-weight: bold;
`

export const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 6px 10px;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColor.author};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 4rem;
  padding: 6px 10px;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.fontColor.author};
  }
`

export const AlertMsg = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  background-color: white;
  color: red;
  padding: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Staatliches', cursive;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.device.mobile}) {
    font-size: 1.3rem;
  }
`
