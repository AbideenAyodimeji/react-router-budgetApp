import { toast } from 'react-toastify'
import { deleteItem, getAllMatchingItems } from '../helpers'
import { redirect } from 'react-router-dom'

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: 'budget',
      id: params.id,
    })

    const associatedExpenses = getAllMatchingItems({
      category: 'expense',
      key: 'budgets',
      value: params.value,
    })

    associatedExpenses.forEach(expense => {
      deleteItem({
        key: 'expenses',
        id: expense.id,
      })
    })
    toast, success('Budget deleted successfully')
  } catch (e) {
    throw new Error('There was a problem deleting your budget.')
    Error
  }
  return redirect('/')
}
