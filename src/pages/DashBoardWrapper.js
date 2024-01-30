import React,{useRef,useState} from 'react'
import '../styles/DashBoardWrapper.css'
import DashBoard from './DashBoard'

const DashBoardWrapper = () => {
    const [mobile, setmobile] = useState(false)
    let a=useRef()
    console.log(a)
    const Switch =(e)=>{
        document.querySelectorAll('.wrapper p').forEach(item=>item.classList.remove('active'))
        e.target.classList.add('active')
    }
    const nav =(e)=>{
        let nav=document.querySelectorAll('.DashBoardWrapper .navigator')[0]
        let b=document.getElementById('nav')
        console.log(b)
        // nav.classList.add('DashBoardWrapper navigatorMobile')
        console.log(nav)
    }
    nav()
  return (
    <div className='DashBoardWrapper'>
        <div className={mobile ? 'navigatorMobile'  : "navigator"} id='nav' ref={a}>
            <div className="header">
                <div></div>
                <div className="img"><img src="/img/emapping.png" alt="" /></div>
                <div className="menu" onClick={()=>setmobile(false)}><img src="/img/icons8-menu-24.png" alt="" /></div>
            </div>
            <div className="wrapper">
                <p className='active' onClick={(e)=>{Switch(e)}}>Dashboard</p>
                <p onClick={(e)=>{Switch(e)}}>Models</p>
                <p onClick={(e)=>{Switch(e)}}>Users</p>
                <p onClick={(e)=>{Switch(e)}}>Report</p>
            </div>
            <p className="signout">Sign out</p>
        </div>
        <div className='container'>{
        <DashBoard handleMenu={setmobile}/>
            }</div>

    </div>
  )
}

export default DashBoardWrapper