import { createContext, useEffect, useState } from "react";
import { storeData } from "../myAPI/API";
export const stateContext = createContext()



export const StateProvider = ({children}) => {
    const [isSelected, setIsSelected] = useState(false);
    const [updated, setUpdated] = useState('');

    

    return (<stateContext.Provider value={{isSelected, setIsSelected, updated, setUpdated}}>
        {children}
    </stateContext.Provider>)
}
