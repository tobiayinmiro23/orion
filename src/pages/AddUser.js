import React,{useState} from 'react'
import '../styles/AddUser.css'


const AddUser = ({mode,handleMenu,setpage}) => {
  const [passwordVisible, setpasswordVisible] = useState(true)
  return (
        <div className='AddUser'>
            <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                }
            </div>
              <div className='Login'>
                            <div className="loginContainer">
                            <div className="heading">
                            <h1>Add New User</h1>
                            <p>please enter new user details</p>
                            </div>
                            <div className="emailContainer">
                                <p>Email</p>
                                <input type="text" placeholder='enter your email'/>
                            </div>
                            <div className="passwordContainer">
                                <p>Password</p>
                                <div className="flex">
                                <input type={passwordVisible ? 'text' : 'password'} placeholder='enter your password'/>
                                <div className="img" onClick={()=>setpasswordVisible(!passwordVisible)}>llll</div>
                                </div>
                            </div>
                            <div className="passwordContainer">
                                <p>Password</p>
                                <div className="flex">
                                <input type={passwordVisible ? 'text' : 'password'} placeholder='enter your password'/>
                                <div className="img" onClick={()=>setpasswordVisible(!passwordVisible)}>llll</div>
                                </div>
                            </div>
                            <div className="infoContainer">
                                <div className="rememberMe">
                                <input type="checkbox" name="" id="" />
                                <p>Remember me</p>
                                </div>
                                <p>forgot password</p>
                            </div>
                            <div className="btnContainer"><button onClick={()=>setpage('userAddedSuccedssfuly')}>Sign in</button></div>
                            </div>
                </div>
                <div className='backBtnWrapper' onClick={()=>setpage('allUsers')}>
                     {
                    mode
                     ?
                    <div className="back"><img src="/img/back-arrow.png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back.png" alt="" /></div>
                     }
                <p>back</p>
                </div>

    </div>
  )
}

export default AddUser