import axios from 'axios'

const url = 'http://localhost:8000/api/todo_list/'

export const getTodoList = async () => {
  return await axios.get(url)
}
