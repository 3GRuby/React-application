import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../utils/firebase/firebase";
// as the acctual values you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unSubscribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })

        return unSubscribe;
    })

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}