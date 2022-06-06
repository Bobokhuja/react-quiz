import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.module.css'
import { NavLink } from 'react-router-dom'

const links = [
  {to: '/', label: 'Список тестов'},
  {to: '/auth', label: 'Авторизация'},
  {to: '/quiz-creator', label: 'Создать тест'},
]

function Drawer(props) {

  const renderLinks = () => (
    links.map((link, index) => (
      <li key={index}>
        <NavLink
          to={link.to}
          className={({isActive}) => isActive ? classes.active : ''}
          onClick={props.menuClose}
        >
          {link.label}
        </NavLink>
      </li>
    ))
  )

  const cls = [
    classes.Drawer,
    !props.isOpen ? classes.close : ''
  ]

  return (
    <>
      <nav className={cls.join(' ')}>
        <ul>
          {renderLinks()}
        </ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.menuClose} /> : null}
    </>
  )
}

export default Drawer