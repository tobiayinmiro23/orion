import React,{useState,useContext} from 'react'
import '../styles/AddUser.css'
import { contextWrapper } from '../App'


const AddUser = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , ,setpage, , setmobile]=contextData

  const [passwordVisible1, setpasswordVisible1] = useState(true)
  const [passwordVisible2, setpasswordVisible2] = useState(true)
  const [loading, setloading] = useState(false)
  const [email, setemail] = useState('')
  const [password1, setpassword1] = useState('')
  const [password2, setpassword2] = useState('')
  const [errMsg, seterrMsg] = useState('')
  let emailRegexPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const handleAddUser = () =>{
    seterrMsg('')
    setloading(true)
    if(email.trim() === '' || password1.trim() === '' || password2.trim() === '' ){
        seterrMsg('please fill in all the fields')
        setloading(false)
    }else if(!email.match(emailRegexPattern)){
        seterrMsg('invalid email')
        setloading(false)
    }else if(!(password1 === password2)){
        seterrMsg('passwords do not match')
        setloading(false)
    }
    else{
        seterrMsg('')
        setpage('userAddedSuccedssfuly')
    }

  }
  return (
        <div className='AddUser'>
            <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
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
                                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter your email'/>
                            </div>
                            <div className="passwordContainer">
                                <p>Password</p>
                                <div className="flex">
                                     <input type={passwordVisible1 ? 'text' : 'password'} value={password1} onChange={(e)=>setpassword1(e.target.value)} placeholder='enter your password'/>
                                        <div className="wrapper">
                                    {
                                        mode ?
                                        <div className='passwordVisibleWrapper' onClick={()=>setpasswordVisible1(!passwordVisible1)}>
                                        {
                                        passwordVisible1
                                        ?
                                        <div className="img" ><img src="/img/eye (1).png" alt="" /></div>
                                        :
                                        <div className="img"><img src="/img/hidden (1).png" alt="" /></div>
                                        }
                                    </div>
                                    :
                                    <div className='passwordVisibleWrapper' onClick={()=>setpasswordVisible1(!passwordVisible1)}>
                                    {
                                    passwordVisible1
                                    ?
                                    <div className="img" ><img src="/img/eye.png" alt="" /></div>
                                    :
                                    <div className="img"><img src="/img/hidden.png" alt="" /></div>
                                    }
                                </div>
                                    }
                                         </div>
                                </div>
                            </div>
                            <div className="passwordContainer">
                                <p>Password</p>
                                <div className="flex">
                                    <input type={passwordVisible2 ? 'text' : 'password'} value={password2} onChange={(e)=>setpassword2(e.target.value)} placeholder='enter your password'/>
                                    <div className="wrapper">
                                        {
                                            mode ?
                                            <div className='passwordVisibleWrapper' onClick={()=>setpasswordVisible2(!passwordVisible2)}>
                                            {
                                            passwordVisible2
                                            ?
                                            <div className="img" ><img src="/img/eye (1).png" alt="" /></div>
                                            :
                                            <div className="img"><img src="/img/hidden (1).png" alt="" /></div>
                                            }
                                        </div>
                                        :
                                        <div className='passwordVisibleWrapper' onClick={()=>setpasswordVisible2(!passwordVisible2)}>
                                        {
                                        passwordVisible2
                                        ?
                                        <div className="img" ><img src="/img/eye.png" alt="" /></div>
                                        :
                                        <div className="img"><img src="/img/hidden.png" alt="" /></div>
                                        }
                                    </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="infoContainer">
                                <div className="rememberMe">
                                <input type="checkbox" name="reme" id="remem" />
                                <label htmlFor='remem'>Remember me</label>
                                </div>
                                <p>forgot password</p>
                            </div>  
                            <p className='errMsg'>{errMsg}</p>
                            <div className="btnContainer">
                                {
                                loading
                                ?
                                <button><div className="round"></div></button>
                                :
                                <button  onClick={(e)=>handleAddUser(e)}>Sign in</button>
                              }
                                
                            </div>
                            </div>
                </div>
                <div className='backBtnWrapper' onClick={()=>setpage('allUsers')}>
                     {
                    mode
                     ?
                    <div className="back"><img src="/img/back (5).png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back (4).png" alt="" /></div>
                     }
                <p>Back</p>
                </div>

    </div>
  )
}

export default AddUser