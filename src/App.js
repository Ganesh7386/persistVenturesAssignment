import {BrowserRouter , Routes , Route} from 'react-router-dom'

import './App.css';
import OverAllApplication from './components/OverAllApplication/index'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <OverAllApplication/>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
