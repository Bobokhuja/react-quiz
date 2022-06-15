import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz'
import classes from './Quiz.module.css'
import axiosQuiz from '../../axios/axios-quiz'
import {Loader} from '../../components/UI/Loader/Loader'

function Quiz(props) {

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answerState, setAnswerState] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const [quiz, setQuiz] = useState([])
  const [results, setResults] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const response = await axiosQuiz(`/quizzes/${id}.json`)
        setQuiz(response.data || [])
        setIsLoading(false)
      } catch(error) {
        console.log(error)
      }
    }

    fetchQuiz()
      .catch(error => console.log(error))
  }, [])

  const isQuizFinished = () => {
    return activeQuestion + 1 === quiz.length
  }

  const onAnswerClickHandler = answerId => {
    if (answerState) {
      const key = Object.keys(answerState)[0]
      if (answerState[key] === 'success') {
        return
      }
    }
    const question = quiz[activeQuestion]
    const allRes = results
    
    if (question.rightAnswerId === answerId) {

      if (!allRes[question.id]) {
        allRes[question.id] = 'success'
        setResults(allRes)
      }

      setAnswerState({
        [answerId]: 'success'
      })
      const timeout = window.setTimeout(() => {
        if (isQuizFinished()) {
          setIsFinished(true)
        } else {
          setActiveQuestion(activeQuestion + 1)
          setAnswerState(null)
        }
        window.clearTimeout(timeout)
      }, 1000)
      
    } else {
      allRes[question.id] = 'error'
      setAnswerState({
        [answerId]: 'error',
      })
      setResults(allRes)
    }
  }

  const onRetry = () => {
    setIsFinished(false)
    setActiveQuestion(0)
    setAnswerState(null)
    setResults({})
  }

  return (
    <div className={classes.Quiz}>
      <div className={classes.QuizWrapper}>
        <h1>Ответьте на вопросы</h1>
        {
          isLoading
            ? <Loader />
            : quiz.length !== 0 ?
              isFinished
              ? <FinishedQuiz
                results={results}
                quiz={quiz}
                onRetry={onRetry}
              />
              : (
                <ActiveQuiz
                  question={quiz[activeQuestion].question}
                  answers={quiz[activeQuestion].answers}
                  onAnswerClick={onAnswerClickHandler}
                  quizLength={quiz.length}
                  questionNumber={activeQuestion + 1}
                  state={answerState}
                />
              )
            : null
        }
      </div>
    </div>
  )
}

export default Quiz