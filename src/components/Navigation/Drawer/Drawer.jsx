import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './Drawer.module.css'

const links = [
  1, 2, 3
]

function Drawer(props) {

  const renderLinks = () => (
    links.map((link, index) => (
      <li key={index}>
        <a>Link {link}</a>
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