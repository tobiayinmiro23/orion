import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import { useState ,useEffect, createContext} from 'react';
import Login from './pages/Login';
import DashBoardWrapper from './pages/DashBoardWrapper';
import AddModelData from './pages/AddModelData';
import Test from './pages/Test';
import ScreenShot from './pages/ScreenShot';
import ScreenShot2 from './pages/ScreenShot2';
import ScreenShot3 from './pages/ScreenShot3';
import ScreenShot4 from './pages/ScreenShot4';
import ReviewerDashBoard from './pages/ReviewerDashBoard';
import GoogleMap from './pages/GoogleMap';
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
                  {/* <Route exact path='/' element={<GoogleMap/>}/> */}
                  {/* <Route exact path='/' element={<ReviewerDashBoard/>}/> */}
                  {/* <Route exact path='/' element={<ScreenShot/>}/> */}
                  {/* <Route exact path='/' element={<ScreenShot2/>}/> */}
                  {/* <Route exact path='/' element={<ScreenShot4/>}/> */}
                  {/* <Route exact path='/' element={<ScreenShot3/>}/> */}
                  {/* <Route exact path='/' element={<Test/>}/> */}
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
