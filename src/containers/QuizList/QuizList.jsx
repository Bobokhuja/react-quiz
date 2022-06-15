import {NavLink} from 'react-router-dom'
import classes from './QuizList.module.css'
import {useEffect, useState} from "react"
import axiosQuiz from '../../axios/axios-quiz'
import {Loader} from "../../components/UI/Loader/Loader"

function QuizList(props) {
  const [quizzes, setQuizzes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const response = await axiosQuiz.get('/quizzes.json')
        const modQuizzes = []
        Object.keys(response.data || {}).forEach((key, index) => {
          modQuizzes.push({
            id: key,
            name: `Тест №${index + 1}`
          })
        })
        setQuizzes(modQuizzes)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    fetchQuizzes()
      .catch(error => console.log(error))
  }, [])

  function renderQuizList() {
    return quizzes.map(quiz => (
        <li key={quiz.id}>
          <NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
        </li>
      )
    )
  }

  return (
    <div className={classes.QuizList}>
      <div>
        <h1>Список тестов</h1>

        {
          isLoading
            ? <Loader />
            : (
              <ul>
                {renderQuizList()}
              </ul>
            )
        }
      </div>
    </div>
  )
}

export default QuizList