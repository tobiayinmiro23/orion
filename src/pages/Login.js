import React ,{useState,useEffect,useContext}from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import { contextWrapper } from '../App'

const Login = () => {
  const contextData=useContext(contextWrapper)
  const [mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage,setnavigateToUploadPage]=contextData
  const [loading, setloading] = useState(false)
  const [passwordVisible, setpasswordVisible] = useState(true)
 
  useEffect(()=>{
    let a=document.getElementById('myid')
    a.classList.remove('none')
    console.log('removed')
    setnavigateToUploadPage(false)
  },[])

  // useEffect(()=>{
    // if(navigateToUploadPage)setpage('addModel')
    // const navModel=document.querySelector('.navModel')
    // console.log(navModel.classList.add('active'))
    // document.querySelectorAll('.wrapper p').forEach(item=>item.classList.remove('active'))
    // navModel.classList.add('active')
// },[navigateToUploadPage])
  return (
    // <div className={loading && 'loading'}>
          <div className="LoginWrapper">
                <div className='Login'>
                  <div className="Wrapper">
                    
                    <div className="background1"></div>
                    <div className="background2"><img src="/img/Mask group.png" alt="" /></div>
                  </div>
                        <div className="loginContainer">
                          <div className="heading">
                         
                          <h1>Welcome Back</h1>
                          <p>Welcome back! please enter your details</p>
                          </div>
                          <div className="emailContainer">
                            <p>Email</p>
                            <input type="text" placeholder='enter your email'/>
                          </div>
                          <div className="passwordContainer">
                            <p>Password</p>
                            <div className="flex">
                              <input type={passwordVisible ? 'text' : 'password'} placeholder='enter your password'/>
                              <div className='passwordVisibleWrapper' onClick={()=>setpasswordVisible(!passwordVisible)}>
                                {
                                passwordVisible
                                ?
                                <div className="img" ><img src="/img/eye.png" alt="" /></div>
                                :
                                <div className="img"><img src="/img/hidden.png" alt="" /></div>
                                }
                            </div>
                            </div>
                          </div>
                          <div className="infoContainer">
                            <div className="rememberMe">
                              <input type="checkbox" name="remem" id="remem" />
                              <label htmlFor='remem'>Remember me</label>
                            </div>
                            <p>forgot password</p>
                          </div>
                          <Link to='/dashboard'>
                            <div className="btnContainer">
                              {
                                loading
                                ?
                                <button><div className="round"></div></button>
                                :
                                <button>Sign in</button>
                              }
                            
                            </div>
                            </Link>
                        </div>
                </div>
          </div>
    // </div>
  )
}

export default Login