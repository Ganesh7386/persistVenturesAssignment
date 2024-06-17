import {useState} from 'react'
import './index.css'


const Home = ()=>{
    const [showInput , setShowInput] = useState(false);
    const [showCategories , setShowCategories] = useState(false);

    return (<div className = "HomeContainer">
    <div className = "navBarContainer">
        <h1>Navbar</h1>
        <ul className = "navbarOptionsContainer">
        <li><button onClick = {()=>{setShowInput(!showInput);setShowCategories(false)}} type = "button">search</button></li>
        <li><button type = "button" onClick={()=>{setShowCategories(!showCategories); setShowInput(false)}} >categories</button></li>
        </ul>
    </div>
    <div className = {` searchContainer ${showInput ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "searchElement">Search Here</label>
        <input type = "text" id = "searchElement" />
    </div>
    <div className = {` categoriesContainer ${showCategories ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "categories">Search categories here</label>
        <select id = "categories">
            <option>Business</option>
            <option>State</option>
        </select>
    </div>
    <div className = "allNewsCardsContainer">
        <h1>This is bottom container</h1>
    </div>
</div>)

}

export default Home;