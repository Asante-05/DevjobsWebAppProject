import { createContext, useState } from "react";



export const stateContext = createContext()

export const StateProvider = ({children}) => {
    const [isSelected, setIsSelected] = useState(false);

    return (<stateContext.Provider value={{isSelected, setIsSelected}}>
        {children}
    </stateContext.Provider>)
}
