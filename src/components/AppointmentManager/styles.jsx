import styled from 'styled-components'

export const Container = styled.div`
  &.main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  &.appointment {
    padding: 2rem;
    background: white;
    border-bottom: 1px solid #e1e1e1;
    color: black;
    p {
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
  }
`

export const Button = styled.button`
  height: 40px;
  width: 150px;
  border-radius: 32px;
  color: #ffffff;
  background: ${({ theme }) => theme.color.lightBlue};
  border: 1px solid ${({ theme }) => theme.color.blue};
  align-self: flex-end;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  box-sizing: border-box;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s;
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
    border: 1px solid ${({ theme }) => theme.color.coral};
    margin-right: 18px;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 18px;
    &.normalSize {
      width: 198px;
      margin-bottom: 0;
    }
    &.white {
      margin-bottom: 0.5rem;
      margin-right: 0;
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
`
export const Subtitle = styled.h2`
  margin: 2rem 0;

  text-align: center;
  text-transform: uppercase;
  font-family: 'Staatliches', cursive;
  letter-spacing: 1px;
`

export const Label = styled.label``

export const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
`

export const Textarea = styled.textarea`
  padding: 6px 10px;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
`

export const AlertMsg = styled.p`
  background-color: white;
  color: red;
  padding: 1rem;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Staatliches', cursive;
`
