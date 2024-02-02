import React,{useRef,useState,useEffect} from 'react'
import '../styles/DashBoardWrapper.css'
import DashBoard from './DashBoard'
import AllModels from './AllModels'
import AddModel from './AddModel'
import AllUsers from './AllUsers'
import AddUser from './AddUser'
import UserAddedSuccedssfuly from './UserAddedSuccedssfuly'

const DashBoardWrapper = ({getMode,navigateToUploadPage, setnavigateToUploadPage}) => {
    const [mobile, setmobile] = useState(false)
    const [darkModeOn, setdarkModeOn] = useState(false)
    const [page, setpage] = useState('dashboard')

    useEffect(()=>{
        if(navigateToUploadPage)setpage('addModel')
    },[navigateToUploadPage])

    const DarkModeOn=()=>{
        setdarkModeOn(true)
        getMode(true)
    }
    const DarkModeOf=()=>{
        setdarkModeOn(false)
        getMode(false)
    }
    const Switch =(e)=>{
        document.querySelectorAll('.wrapper p').forEach(item=>item.classList.remove('active'))
        e.target.classList.add('active')
        setmobile(false)
    }
  return (
    <div className='DashBoardWrapper'>
        <div className={mobile ? 'navigatorMobile'  : "navigator"} id='nav'>
            <div className="header">
                <div className="menu" onClick={()=>setmobile(false)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                <div className="img"><img src="/img/emapping.png" alt="" /></div>
                <div></div>
            </div>
            <div className="wrapper">
                <p className='active' onClick={(e)=>{
                    setpage('dashboard')
                    Switch(e)
                    }}>Dashboard</p>
                    
                <p onClick={(e)=>{
                    setpage('dashboard')
                    setpage('allModels')
                    Switch(e)}
                    }>Models</p>
                <p onClick={(e)=>{
                    setpage('allUsers')
                    Switch(e)}
                    }>Users</p>
                <p onClick={(e)=>{Switch(e)}}>Report</p>
            </div>
            <div className="bottom">
            <div className="mode">
                {
                    darkModeOn ? <div onClick={DarkModeOf}>light mode</div> : <div onClick={DarkModeOn}>dark mode</div>
                }
            </div>
            <p className="signout">Sign out</p>
            </div>
        </div>
        <div className={darkModeOn ? 'darkModeContainer' : 'container'}>
            
               { page === 'dashboard' &&  <DashBoard mode={darkModeOn} handleMenu={setmobile}/> }
               {  page === 'allModels' &&  <AllModels mode={darkModeOn} setpage={setpage} handleMenu={setmobile}/>  }
               { page === 'allUsers' &&  <AllUsers mode={darkModeOn} setpage={setpage}  handleMenu={setmobile}/> }
               { page === 'addModel' &&  <AddModel mode={darkModeOn} setpage={setpage} handleMenu={setmobile}  setnavigateToUploadPage={setnavigateToUploadPage}/> }
               { page === 'addUser' &&  <AddUser mode={darkModeOn} setpage={setpage} handleMenu={setmobile}/> }
               { page === 'userAddedSuccedssfuly' &&  <UserAddedSuccedssfuly mode={darkModeOn} setpage={setpage} handleMenu={setmobile}/> }
            {/* // <AllModels mode={darkModeOn} handleMenu={setmobile}/>
            // <AddModel mode={darkModeOn} handleMenu={setmobile}/>
            // <AllUsers mode={darkModeOn} handleMenu={setmobile}/>
            // <AddUser mode={darkModeOn}  handleMenu={setmobile}/> */}
            
            </div>

    </div>
  )
}

export default DashBoardWrapper