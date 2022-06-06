import { useState } from 'react'
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle'
import classes from './Layout.module.css'
import Drawer from '../../components/Navigation/Drawer/Drawer'

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false)

  const onToggleHandler = () => {
    setIsOpen(!isOpen)
  }

  const onMenuCloseHandler = () => setIsOpen(false)

  return (
    <div className={classes.Layout}>
      <Drawer isOpen={isOpen} menuClose={onMenuCloseHandler} />
      <MenuToggle 
        isOpen={isOpen}
        onToggle={onToggleHandler}
      />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout