import classes from './MenuToggle.module.css'

function MenuToggle(props) {

  const cls = [
    classes.MenuToggle,
    'fa'
  ]

  if (props.isOpen) {
    cls.push('fa-times', classes.open)
  } else {
    cls.push('fa-bars')
  }

  return <i 
    onClick={props.onToggle}
    className={cls.join(' ')}
  />
}

export default MenuToggle