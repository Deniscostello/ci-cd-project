import { createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export function GlobalContextProvider(props) {
    const [globals, setGlobals] = useState({ aString: 'init val', count: 0, images: [], user:[], dataLoaded: false })

    useEffect(() => {
        getAllImages()
    }, []);

    useEffect(() => {
        getAllUsers()
    }, []);

    async function getAllImages() {
        const response = await fetch('/api/get-image', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); newGlobals.images = data.images; newGlobals.dataLoaded = true; return newGlobals })
    }

    async function getAllUsers() {
        const response = await fetch('/api/get-user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await response.json();
        setGlobals((previousGlobals) => { 
            const newGlobals = JSON.parse(JSON.stringify(previousGlobals)); 
            newGlobals.user = data.user; 
            newGlobals.dataLoaded = true; 
            return newGlobals 
        })
        
    }

    async function editGlobalData(command) { 
        if (command.cmd == 'addImage') {
            const response = await fetch('/api/new-image', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const data = await response.json();
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.images.push(command.newVal); return newGlobals
            })
        }

        if (command.cmd == 'addUser') {
            const response = await fetch('/api/new-user', {
                method: 'POST',
                body: JSON.stringify(command.newVal),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const data = await response.json(); 
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals))
                newGlobals.user.push(command.newVal); return newGlobals
            })
        }
        if (command.cmd == 'hideMenu') {
            setGlobals((previousGlobals) => {
                const newGlobals = JSON.parse(JSON.stringify(previousGlobals));
                newGlobals.hideMenu = command.newVal; return newGlobals
            })
        }
    }

    const context = {
        updateGlobals: editGlobalData,
        theGlobalObject: globals
    }

    return <GlobalContext.Provider value={context}>
        {props.children}
    </GlobalContext.Provider>
}


export default GlobalContext
