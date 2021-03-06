import AnswerItem from './AnswerItem/AnswerItem'
import classes from './AnswersList.module.css'

function AnswersList(props) {
  return (
    <ul className={classes.AnswersList}>
      {
        props.answers.map((answer, index) => (
          <AnswerItem 
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        ))
      }
    </ul>
  )
}

export default AnswersList