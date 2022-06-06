import AnswersList from './AnswersList/AnswersList'
import classes from './ActiveQuiz.module.css'

function ActiveQuiz(props) {

  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>
          <strong>{props.questionNumber}. </strong>
          {props.question}
        </span>
        <small>
          {props.questionNumber} из {props.quizLength}
        </small>
      </p>

      <AnswersList 
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
      />
    </div>
  )
}

export default ActiveQuiz