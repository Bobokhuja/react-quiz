import classes from './Input.module.css'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

function Input(props) {
  const inputType = props.type || 'text'
  const htmlFor = `${props.type}-${Math.random()}`
  const cls = [classes.Input]

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        value={props.value}
        onChange={props.onChange}
        id={htmlFor}
      />
      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Error'}</span>
          : null
      }
      
    </div>
  )
}

export default Input