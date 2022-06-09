import classes from './QuizCreator.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

function QuizCreator(props) {

  const submitHandler = event => {
    event.preventDefault()
  }

  const addQuestionHandler = () => {

  }

  const createQuizHandler = () => {

  }

  return (
    <div className={classes.QuizCreator}>
      <div>
        <h1>Создать тест</h1>

        <form onSubmit={submitHandler}>

          <input type='text' />
          <hr />
          <input type='text' />
          <input type='text' />
          <input type='text' />
          <input type='text' />

          <select></select>
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