import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css';
import Home from './components/Home/index'
import DetailedNewsComp from './components/DetailedNewsComp/index'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path = "/" element = {<Home/>}/>
      <Route exact path = "/news/" element = {<DetailedNewsComp/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
