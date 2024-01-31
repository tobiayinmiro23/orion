import React from 'react'
import '../styles/AddUser.css'


const AddUser = () => {
  return (
        <div className='AddUser'>
              <div className='Login'>
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
                                <input type="password" placeholder='enter your password'/>
                            </div>
                            <div className="passwordContainer">
                                <p>Verify Password</p>
                                <input type="password" placeholder='enter your password'/>
                            </div>
                            <div className="infoContainer">
                                <div className="rememberMe">
                                <input type="checkbox" name="" id="" />
                                <p>Remember me</p>
                                </div>
                                <p>forgot password</p>
                            </div>
                            <div className="btnContainer"><button>Sign in</button></div>
                            </div>
        </div>

    </div>
  )
}

export default AddUser