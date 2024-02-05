import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import { useState , createContext} from 'react';
import Login from './pages/Login';
import DashBoardWrapper from './pages/DashBoardWrapper';
import AddModelData from './pages/AddModelData';
export let contextWrapper=createContext()

function App() {
  const [mode, setmode] = useState(false)
  const [mobile, setmobile] = useState(false)
  const [page, setpage] = useState('dashboard')
  const [navigateToUploadPage, setnavigateToUploadPage] = useState(false)
 
  return (
    <div className="App">
         <contextWrapper.Provider value={[mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage, setnavigateToUploadPage]}>
            <Router>
                <Routes>
                  <Route exact path='/' element={<Login/>}/>
                  <Route exact path='/dashboard' element={<DashBoardWrapper   />}/>
                  <Route exact path='/addModelData' element={<AddModelData />}/>
                </Routes>
              </Router>
         </contextWrapper.Provider>
    </div>
  );
}

export default App;
