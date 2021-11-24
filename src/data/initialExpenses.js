import { v4 as uuid } from 'uuid'

const INITIAL_EXPENSES = [
  {
    id: uuid(),
    title: 'Macbook Pro',
    amount: 1200,
    date: new Date(2020, 7, 14),
  },
  { id: uuid(), title: 'XBOX Series X 1TB', amount: 500, date: new Date(2021, 2, 12) },
  {
    id: uuid(),
    title: 'LG Monitor 27"',
    amount: 299.99,
    date: new Date(2021, 10, 28),
  },
  {
    id: uuid(),
    title: 'Camera Go Pro Hero 5',
    amount: 229.67,
    date: new Date(2021, 5, 12),
  },
]

export default INITIAL_EXPENSES
