import {createContext, useState} from 'react'

export const loginContext = createContext(null)

const ContextProvider = ({children}) =>{
    const [account, setaccount] = useState("");
    return (
        <loginContext.Provider value={{account, setaccount}}>
            {children}
        </loginContext.Provider>
    )
}

export default ContextProvider;

