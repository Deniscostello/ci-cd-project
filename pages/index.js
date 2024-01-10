import ImageList from '../components/images/ImageList';
import { useContext } from "react";
import GlobalContext from "./store/globalContext"

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return <ImageList image={globalCtx.theGlobalObject.images} />
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;