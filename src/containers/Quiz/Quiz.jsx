import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz'
import classes from './Quiz.module.css'

function Quiz(props) {

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answerState, setAnswerState] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const [quiz, setQuiz] = useState([
    {
      question: 'Какого цвета небо?',
      rightAnswerId: 2,
      id: 1,
      answers: [
        {text: 'Чёрный', id: 1},
        {text: 'Синий', id: 2},
        {text: 'Красный', id: 3},
        {text: 'Зелёный', id: 4},
      ]
    },
    {
      question: 'Что такое JavaScript?',
      rightAnswerId: 1,
      id: 2,
      answers: [
        {text: 'Язык программирования', id: 1},
        {text: 'Язык разметки', id: 2},
        {text: 'Еда', id: 3},
        {text: 'Дрова', id: 4},
      ]
    }
  ])
  const [results, setResults] = useState({})
  const {id} = useParams()

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
  console.log(id)

  return (
    <div className={classes.Quiz}>
      <div className={classes.QuizWrapper}>
        <h1>Ответьте на вопросы</h1>
        {
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
        }
      </div>
    </div>
  )
}

export default Quiz