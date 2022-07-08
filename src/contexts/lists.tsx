import React, { ReactNode, useContext } from "react";
import { categories, directions, formats, levels } from "../helpers"

interface ListParamsType {
    children: ReactNode
}

interface ListContextState {
    categories: string[][]
    directions: string[][]
    formats: string[][]
    levels: string[][]
}

const initialState: ListContextState = {
    categories,
    directions,
    formats,
    levels
}

export const ListsContext = React.createContext<ListContextState>(initialState)

export const ListsProvider = ({ children }: ListParamsType) => {
    const lists = useContext(ListsContext)
    return <ListsContext.Provider value={lists}>{children}</ListsContext.Provider>
}

export const useUIList = () => useContext(ListsContext)
