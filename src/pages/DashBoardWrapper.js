import React,{useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import '../styles/DashBoardWrapper.css'
import DashBoard from './DashBoard'
import AllModels from './AllModels'
import AddModel from './AddModel'
import AllUsers from './AllUsers'
import AddUser from './AddUser'
import UserAddedSuccedssfuly from './UserAddedSuccedssfuly'
import { contextWrapper } from '../App'
const DashBoardWrapper = () => {
    const contextData=useContext(contextWrapper)
    const [mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage]=contextData
    useEffect(()=>{
        if(navigateToUploadPage)setpage('addModel')
        const navModel=document.querySelector('.navModel')
        console.log(navModel.classList.add('active'))
        document.querySelectorAll('.wrapper p').forEach(item=>item.classList.remove('active'))
        navModel.classList.add('active')
    },[navigateToUploadPage])
    
    useEffect(()=>{
        let a=document.getElementById('myid')
        a.classList.add('none')
    },[])
  
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
                    
                <p className='navModel' onClick={(e)=>{
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
                    mode ? <div onClick={()=>setmode(!mode)}>light mode</div> : <div onClick={()=>setmode(!mode)}>dark mode</div>
                }
            </div>
            
            <Link to='/'><p className="signout">Sign out</p></Link>
            </div>
        </div>
        <div className={mode ? 'darkModeContainer' : 'container'}>
            
               { page === 'dashboard' &&  <DashBoard  /> }
               {  page === 'allModels' &&  <AllModels   />  }
               { page === 'allUsers' &&  <AllUsers    /> }
               { page === 'addModel' &&  <AddModel    /> }
               { page === 'addUser' &&  <AddUser   /> }
               { page === 'userAddedSuccedssfuly' &&  <UserAddedSuccedssfuly /> }
            
            </div>

    </div>
  )
}

export default DashBoardWrapper