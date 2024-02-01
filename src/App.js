import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import DashBoardWrapper from './pages/DashBoardWrapper';
import AddUser from './pages/AddUser';
import AddModelData from './pages/AddModelData';
function App() {
  // <HomePage/>
  // <Login/>
  const [mode, setmode] = useState(false)
  const [page, setpage] = useState('')
  const [navigateToUploadPage, setnavigateToUploadPage] = useState(false)
  const getMode=(param)=>{
    setmode(param)
  }
  
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route exact path='/' element={<Login/>}/>
              <Route exact path='/dashboard' element={<DashBoardWrapper navigateToUploadPage={navigateToUploadPage}  setnavigateToUploadPage={setnavigateToUploadPage} getMode={getMode}/>}/>
              <Route exact path='/addModelData' element={<AddModelData setnavigateToUploadPage={setnavigateToUploadPage} mode={mode}/>}/>
            </Routes>
       </Router>
    </div>
  );
}

export default App;
