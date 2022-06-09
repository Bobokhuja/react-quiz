import {useState} from 'react'
import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import is from 'is_js'

function Auth(props) {

  const [isFormValid, setIsFormValid] = useState(false)
  const [formControls, setFormControls] = useState({
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Введите правильный email',
      valid: false,
      touched: false,
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      value: '',
      type: 'password',
      label: 'Password',
      errorMessage: 'Введите правильный password',
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6
      }
    }
  })

  const submitHandler = event => {
    event.preventDefault()
  }

  const loginHandler = () => {

  }

  const registerHandler = () => {

  }

  const validateControl = (value, validation) => {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.trim().length >= validation.minLength && isValid
    }

    return isValid
  }

  const onChangeHandler = (event, controlName) => {
    const copyFormControls = {...formControls}
    const control = {...copyFormControls[controlName]}

    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)

    copyFormControls[controlName] = control

    let isFormValidCheck = true

    Object.keys(copyFormControls).forEach(name => {
      isFormValidCheck = copyFormControls[name].valid && isFormValidCheck
    })

    setIsFormValid(isFormValidCheck)
    setFormControls(copyFormControls)
  }

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName]

      return (
        <Input
          key={controlName + index}
          value={control.value}
          type={control.type}
          errorMessage={control.errorMessage}
          label={control.label}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          onChange={event => onChangeHandler(event, controlName)}
        />
      )
    })
  }


  return (
    <div className={classes.Auth}>
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={submitHandler} className={classes.Form}>
          
          {renderInputs()}

          <Button
            type='success'
            onClick={loginHandler}
            disabled={!isFormValid}
          >
            Вход
          </Button>
          <Button
            type='primary'
            onClick={registerHandler}
          >
            Регистрация
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Auth