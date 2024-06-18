import {useState} from 'react'
import HomeNews from '../HomeNews/index';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from '../Navbar/index'
import './index.css'
import DetailedNewsComp from '../DetailedNewsComp';
import {SearchAndCategoryContext , SearchAndCategoryContextProvider} from '../SearchCategoryContext/index'


const OverAllApplication = ()=>{
    return (
    <div className = "HomeContainer">
    <BrowserRouter>
    <SearchAndCategoryContextProvider>
    <Navbar/>
    <Routes>
        <Route exact path = "/" element = {<HomeNews/>} />
        <Route exact path = "/news" element = {<DetailedNewsComp/>}/>
    </Routes>
    </SearchAndCategoryContextProvider>
    </BrowserRouter>
</div>
)

}

export default OverAllApplication;