import NewUser from '../../components/user/NewUser';
import { useRouter } from 'next/router';
import GlobalContext from "../store/globalContext"
import { useContext } from 'react'

function NewUserPage() {
    const router = useRouter()
    const globalCtx = useContext(GlobalContext)

    async function addUserHandler(enteredUserData)  {
        await globalCtx.updateGlobals({cmd: 'addUser', newVal: enteredUserData})
        router.push('/');
    }

    return <NewUser onAddUser={addUserHandler} />
}

export default NewUserPage