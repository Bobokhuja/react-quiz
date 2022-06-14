import React from 'react'
import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import { useState } from 'react'
import {createControl} from '../../form/formFramework'
import Select from "../../components/UI/Select/Select"

function createFormControl() {
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
  const [formControls, setFormControls] = useState(createFormControl())
  const [rightAnswerId, setRightAnswerId] = useState(1)

  const submitHandler = event => {
    event.preventDefault()
  }

  const addQuestionHandler = () => {

  }

  const createQuizHandler = () => {

  }

  const changeHandler = (value, controlName) => {

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
          >
            Добавить вопрос
          </Button>
          <Button
            type='success'
            onClick={createQuizHandler}
          >
            Создать тест
          </Button>
        </form>
      </div>
    </div>
  )
}

export default QuizCreator