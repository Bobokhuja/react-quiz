import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-b8dd0-default-rtdb.firebaseio.com'
})