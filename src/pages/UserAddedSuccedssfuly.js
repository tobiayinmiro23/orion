import React,{useContext} from 'react'
import '../styles/UserAddedSuccessfully.css'
import { contextWrapper } from '../App'


const UserAddedSuccedssfuly = () => {
      const contextData=useContext(contextWrapper)
      const [mode, , , setpage, , setmobile]=contextData

  return (
    <div className='UserAddedSuccessfully'>
        <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                }
            </div>
       <div className="wrapper">
             <div className="img"><img src="/img/Group 215.png" alt="" /></div>
             <h1>Account created successfully</h1>
       </div>
       <div className='backBtnWrapper' onClick={()=>setpage('allUsers')}>
              {
                    mode
                     ?
                    <div className="back"><img src="/img/back (5).png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back (4).png" alt="" /></div>
               }
                <p>back</p>
          </div>
        
    </div>
  )
}

export default UserAddedSuccedssfuly