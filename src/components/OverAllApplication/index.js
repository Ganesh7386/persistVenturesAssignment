import {useState} from 'react'
import HomeNews from '../HomeNews/index';
import { Routes , Route , BrowserRouter } from 'react-router-dom'
import Navbar from '../Navbar/index'
import './index.css'
import DetailedNewsComp from '../DetailedNewsComp';
import SavedRoute from '../SavedRoute/index'
import {SearchAndCategoryContext , SearchAndCategoryContextProvider} from '../SearchCategoryContext/index'


const OverAllApplication = ()=>{
    return (
    <div className = "HomeContainer">
    <BrowserRouter>
    <SearchAndCategoryContextProvider>
    <Navbar/>
    <h1>This is home container of react</h1>
    {/* <Routes>
        <Route path = "/" element = {<HomeNews/>} />
        <Route path = "/saved" element = {<SavedRoute/>} />
        <Route path = "/news" element = {<DetailedNewsComp/>}/>
    </Routes> */}
    </SearchAndCategoryContextProvider>
    </BrowserRouter>
</div>
)

}

export default OverAllApplication;