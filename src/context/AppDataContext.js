import React, {createContext, useMemo, useState} from 'react'

const AppContext = createContext({})

const AppProvider = (props) => {

    const [userAuth, setUserAuth] = useState(false)

    const appDataMemo = useMemo(() => ({
        userAuth, setUserAuth
    }), [
        userAuth, setUserAuth
    ])

    return (
        <AppContext.Provider value={appDataMemo}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}