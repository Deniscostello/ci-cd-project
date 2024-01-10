import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"
import Menu from '../menu/Menu'
import MenuContent from '../menu/MenuContent'

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)

  function toggleMenuHide() {
    globalCtx.updateGlobals({ cmd: 'hideMenu', newVal: false })
  }

  const contents = []
  globalCtx.theGlobalObject.user.forEach(element => {
    contents.push({name: element.name, email: element.email})    
  });




  return (
    <header className={classes.header}>
      <MenuContent contents ={contents} />
      <Menu toggleMenuHide={() => toggleMenuHide()} />
      <nav>
        <ul>
          <li>
            <Link href='/'>All Images</Link>
          </li>
          <li>
            <Link href='/new-image'>Add New Image</Link>
          </li>
          <li>
            <Link href='/new-user'>Create New User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
