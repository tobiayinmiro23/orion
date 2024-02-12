import React ,{useState,useEffect,useContext}from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/Login.css'
import { contextWrapper } from '../App'
const Login = () => {
  const navigate=useNavigate()
  const contextData=useContext(contextWrapper)
  const [mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage,setnavigateToUploadPage]=contextData
  const [loading, setloading] = useState(false)
  const [passwordVisible, setpasswordVisible] = useState(true)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
 const [errMsg, seterrMsg] = useState('')
  useEffect(()=>{
    let a=document.getElementById('myid')
    a.classList.remove('none')
    console.log('removed')
    setnavigateToUploadPage(false)
  },[])

  let emailRegexPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const handleAddUser = (e) =>{
    seterrMsg('')
    setloading(true)
    if(email.trim() === '' || password.trim() === '' ){
        seterrMsg('please fill in all the fields')
        setloading(false)
    }else if(!email.match(emailRegexPattern)){
        seterrMsg('invalid email')
        setloading(false)
    }else{
      // setloading(true)
        seterrMsg('')
        const userData= {'email': email,'password': password}
        try{
          axios({
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            // headers: {'Authorization': 'orion'},
            url: 'http://localhost:3001/login2',
            data:userData,
          })
          .then(res =>{
           console.log(res)
          setloading(false)
          navigate('/dashboard')
          })
          .catch((e)=>{
          setloading(false)
            console.log(e)
        });
          // setLoggedIn(true);
        }
        catch(e){
          setloading(false)
          console.log(e.message);
        }
        
    }

  }

  // axios.post(
  //   'http://localhost:3001/login2',
  //   userData,
    
  //   // {
  //   // userData
  //   // },
  //   {
  //     headers:{
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     },
  //     // body:{
  //     //    userData
  //     // }
  //   }
  // )
  // function loginPost(){

  //   const userData= {'email': email,'password': password}
    
  //   try{
  //     axios.post(
  //       'http://localhost:3001/login2',
  //       userData,
  //       {
  //         headers:{
  //           'Content-Type': 'application/x-www-form-urlencoded'
  //         },
  //         // withCredentials: true
  //       }
  //     ).then(res => console.log(res))
  //     .catch(err=>console.log(err));
  //     // setLoggedIn(true);
  //   }
  //   catch(e){
  //     console.log(e.message);
  //   }
  // }
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
                            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='enter your email'/>
                          </div>
                          <div className="passwordContainer">
                            <p>Password</p>
                            <div className="flex">
                              <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='enter your password'/>
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
                          <p className='errMsg'>{errMsg}</p>

                          {/* <Link to='/dashboard'> */}

                            <div className="btnContainer">
                              {
                                loading
                                ?
                                <button><div className="round"></div></button>
                                :
                                <button onClick={handleAddUser}>Sign in</button>
                              }
                            
                            </div>
                            {/* </Link> */}
                        </div>
                </div>
          </div>
    // </div>
  )
}

export default Login