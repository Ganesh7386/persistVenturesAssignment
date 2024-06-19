import {BrowserRouter} from 'react-router-dom'

import './App.css';
import OverAllApplication from './components/OverAllApplication/index'

function App() {
  return (
    <div className="App">
    <BrowserRouter><OverAllApplication/></BrowserRouter>
    </div>
   
  );
}

export default App;
