import { createContext, useState } from "react";



export const stateContext = createContext()

export const StateProvider = ({children}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [updated, setUpdated] = useState('');

    return (<stateContext.Provider value={{isSelected, setIsSelected, updated, setUpdated}}>
        {children}
    </stateContext.Provider>)
}
