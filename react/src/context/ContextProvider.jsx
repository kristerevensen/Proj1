import { createContext } from "react";

const stateContext = createContext({})

export const ContextProvider = () => {
    const[currentUser, setCurentUser] = useState({})
    const[userToken, setUserToken] = useState(null)
    const[projectToken, setProjectToken] = useState(null)
    return (
        <stateContext.Provider value={{
            currentUser,
            setCurentUser,
            userToken,
            setUserToken,
            projectToken,
            setProjectToken
         }}>

         </stateContext.Provider>
    )
}
