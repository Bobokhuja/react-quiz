import classes from './Auth.module.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

function Auth(props) {

  const submitHandler = event => {
    event.preventDefault()
  }

  const loginHandler = () => {

  }

  const registerHandler = () => {

  }


  return (
    <div className={classes.Auth}>
      <div>
        <h1>Авторизация</h1>
        <form onSubmit={submitHandler} className={classes.Form}>
          <Input 
            type='text' 
            label='Email' 
          />
          <Input 
            type='password' 
            label='Password'
          />

          <Button
            type='success'
            onClick={loginHandler}
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