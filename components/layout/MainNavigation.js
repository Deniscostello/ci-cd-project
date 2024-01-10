import classes from './MainNavigation.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"

function MainNavigation() {
  const globalCtx = useContext(GlobalContext)




  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Images</Link>
          </li>
          <li>
            <Link href='/new-image'>Add New Image</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation
