import React from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { useState } from 'react'
import {createControl, validate, validateForm} from '../../form/formFramework'
import Select from "../../components/UI/Select/Select"
import axiosQuiz from '../../axios/axios-quiz'

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Поле вопроса не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

function createOptionControl(number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: 'Поле ответа не может быть пустым',
    id: number
  }, {required: true})
}

function QuizCreator(props) {
  const [quiz, setQuiz] = useState([])
  const [formControls, setFormControls] = useState(createFormControls())
  const [rightAnswerId, setRightAnswerId] = useState(1)
  const [isFormValid, setIsFormValid] = useState(false)

  const submitHandler = event => {
    event.preventDefault()
  }

  const addQuestionHandler = event => {
    event.preventDefault()
    const copyQuiz = quiz.concat()
    const id = copyQuiz.length + 1
    const {question, option1, option2, option3, option4} = formControls
    const questionItem = {
      question: question.value,
      id,
      rightAnswerId,
      answers: [
        {text: option1.value, id: option1.id},
        {text: option2.value, id: option2.id},
        {text: option3.value, id: option3.id},
        {text: option4.value, id: option4.id},
      ]
    }

    copyQuiz.push(questionItem)
    setQuiz(copyQuiz)
    setIsFormValid(false)
    setRightAnswerId(1)
    setFormControls(createFormControls())
  }

  const createQuizHandler = async event => {
    event.preventDefault()
    try {
      await axiosQuiz.post('/quizzes.json', quiz)
      setQuiz([])
      setIsFormValid(false)
      setRightAnswerId(1)
      setFormControls(createFormControls())
    } catch(error) {
      console.log(error)
    }
  }

  const changeHandler = (value, controlName) => {
    const copyFormControls = {...formControls}
    const control = {...copyFormControls[controlName]}

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    copyFormControls[controlName] = control
    setFormControls(copyFormControls)
    setIsFormValid(validateForm(copyFormControls))
  }

  const renderControls = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]
      return (
        <React.Fragment key={controlName}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => changeHandler(event.target.value, controlName)}
          />
          {!index && <hr />}
        </React.Fragment>
      )
    })
  }

  const onChangeSelectHandler = event => {
    setRightAnswerId(+event.target.value)
  }

  const select = <Select
    value={rightAnswerId}
    label="Выберите правильный ответ"
    onChange={onChangeSelectHandler}
    options={[
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
      {text: 4, value: 4}
    ]}
  />

  return (
    <div className={classes.QuizCreator}>
      <div>
        <h1>Создать тест</h1>

        <form onSubmit={submitHandler}>

          {renderControls()}

          {select}
          <Button
            type='primary'
            onClick={addQuestionHandler}
            disabled={!isFormValid}
          >
            Добавить вопрос
          </Button>
          <Button
            type='success'
            onClick={createQuizHandler}
            disabled={quiz.length === 0}
          >
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}

export default QuizCreator