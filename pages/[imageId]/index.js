import ImageDetail from '../../components/images/ImageDetail'
import { useRouter } from 'next/router'
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

export default function () {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter();

    // Back to basics, a simple for loop. Also trim() comes into play as it usually does!
    let returnVal = null
    for (let ii = 0; ii < globalCtx.theGlobalObject.images.length; ii++) {
        let temp = globalCtx.theGlobalObject.images[ii];
        if (temp.imageId == router.query.imageId) {
            returnVal = <ImageDetail image={temp.url} title={temp.title} description={temp.description} />
        }
    }
    // In the real world, we'd put the code above in the store context module. 
    return returnVal
}
