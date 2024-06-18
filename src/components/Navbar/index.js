import {useState , useContext} from 'react'
import {Link} from 'react-router-dom'
import {SearchAndCategoryContext} from '../SearchCategoryContext/index'
import './index.css'

function Navbar() {
    const [showInput , setShowInput] = useState(false);
    const [showCategories , setShowCategories] = useState(false);
    const inputCategoryChangeContext = useContext(SearchAndCategoryContext)
    const {setSearchValue , setCategoryValue} = inputCategoryChangeContext;

    return (
        <div className = "wholeNavBarContainer">
        <div className = "navBarContainer">
        <h1>Navbar</h1>
        <Link to = "/news">go to news</Link>
        <Link to = "/">go to home</Link>
        <ul className = "navbarOptionsContainer">
        <li><button onClick = {()=>{setShowInput(!showInput);setShowCategories(false)}} type = "button">search</button></li>
        <li><button type = "button" onClick={()=>{setShowCategories(!showCategories); setShowInput(false)}} >categories</button></li>
        </ul>
    </div>
    <div className = {` searchContainer ${showInput ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "searchElement">Search Here</label>
        <input type = "text" id = "searchElement" onChange = {(e)=>{setSearchValue(e.target.value)}} />
    </div>
    <div className = {` categoriesContainer ${showCategories ? 'showStyling' : 'hidingStyling'}`} >
        <label htmlFor = "categories">Search categories here</label>
        <select id = "categories" onChange = {(e)=>{setCategoryValue(e.target.value)}}>
            <option value = "Business">Business</option>
            <option value = "Entertainment">Entertainment</option>
            <option value = "technology">Technology</option>
        </select>
    </div>
    </div>
    )
}


export default Navbar