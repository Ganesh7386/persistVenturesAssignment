import React from 'react'
import {useState} from 'react';

export const SearchAndCategoryContext = React.createContext({
    searchValue : "",
    category : "Business",
    setSearchValue  : ()=>{},
    setCategoryValue : ()=>{}
})

export const SearchAndCategoryContextProvider = ({children})=> {
    const [searchValue , setSearchValue] = useState('')
    const [category , setCategory] = useState('Business')

    const handleSetSearchValue = (text)=> {
        setSearchValue(text);
    }

    const handleSetCategoryValue = (category)=> {
        setCategory(category);
    }

    return (
        <SearchAndCategoryContext.Provider value = {{searchValue , category , setSearchValue : handleSetSearchValue , setCategoryValue : handleSetCategoryValue}}>
            {children}
        </SearchAndCategoryContext.Provider>
    )

}
