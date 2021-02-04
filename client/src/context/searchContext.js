import React, { createContext, useState } from "react"

export const SearchContext = createContext("")

export function SearchProvider(props) {
    const [ searchInput, setSearchInput] = useState("")
    const searchValue = {
      searchInput, setSearchInput
    }

    return (
        <SearchContext.Provider value={searchValue}>
            {
                props.children
            }
        </SearchContext.Provider>
    )
}