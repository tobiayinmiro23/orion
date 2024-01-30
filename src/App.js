import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import DashBoardWrapper from './pages/DashBoardWrapper';
function App() {
  // <HomePage/>
  <Login/>
  return (
    <div className="App">
          <Router>
            <Routes>
              {/* <Route exact path='/' element={<Login/>}/> */}
              <Route exact path='/' element={<DashBoardWrapper/>}/>
              
            </Routes>
       </Router>
    </div>
  );
}

export default App;
