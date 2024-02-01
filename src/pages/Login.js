import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = () => {
  const [passwordVisible, setpasswordVisible] = useState(true)
  return (
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
                  <div className="btnContainer"><Link to='/dashboard'><button>Sign in</button></Link></div>
                </div>
        </div>
   </div>
  )
}

export default Login