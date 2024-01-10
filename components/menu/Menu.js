import classes from "./Menu.module.css"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Menu(props) {
  return (
    <div className={classes.mainDiv} onClick={() => props.toggleMenuHide()}>
      <span className={classes.mainSpan}><RxHamburgerMenu /></span>
    </div>
  )
}
