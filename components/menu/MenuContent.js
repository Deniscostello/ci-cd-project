import classes from './MenuContent.module.css'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import GlobalContext from '../../pages/store/globalContext'

export default function MenuContent(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    let [popupToggle, setPopupToggle] = useState(false)

    if (globalCtx.theGlobalObject.hideMenu) {
        return null
    }



    function closeMe() {
        globalCtx.updateGlobals({ cmd: 'hideMenu', newVal: true })
        if (popupToggle == true) {
            setPopupToggle(false)
        } else {
            setPopupToggle(true)
        }
    }

    let contentJsx = props.contents.map((item, index) => ( 
        <p key={index} >{item.name} {item.email} </p>
    ))


    return (
        <div className={classes.background} onClick={() => closeMe()} >
            <div className={classes.mainContent} >
                <div className={classes.profileHead}>
                <div className={classes.buttonDiv}>
                        <button onClick={() => closeMe()}> X</button>
                        </div>
                    <div className={classes.titleDiv}>
                       Current Users 
                    </div> 
                </div>
                <div className={classes.profileContent}>
                    <div className={classes.userProfileDiv}>
                    <div>{contentJsx}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
