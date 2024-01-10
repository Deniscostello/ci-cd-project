
import NewImage from '../../components/images/NewImage';
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewImagePage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addImageHandler(enteredImageData)  {
        await globalCtx.updateGlobals({cmd: 'addImage', newVal: enteredImageData})
        router.push('/');
    }

    return <NewImage onAddImage={addImageHandler} />
}

export default NewImagePage