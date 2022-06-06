import classes from './AnswerItem.module.css'

function AnswerItem(props) {
  const cls = [
    classes.AnswerItem,
    props.state ? classes[props.state] : ''
  ]

  return (
    <li 
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem