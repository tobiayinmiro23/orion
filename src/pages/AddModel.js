import React,{useContext,useState} from 'react'
import '../styles/AddModel.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { contextWrapper } from '../App'
import { useEffect } from 'react'

const AddModel = () => {
    const contextData=useContext(contextWrapper)
    const [modelName, setmodelName] = useState('')
    const [modelDescription, setmodelDescription] = useState('')
    const [model, setmodel] = useState('')
    const [coverPhoto, setcoverPhoto] = useState()
    const [errMsg, seterrMsg] = useState('')
    const [loading, setloading] = useState(false)


    const [mode, , , setpage, , setmobile,,setnavigateToUploadPage]=contextData
   useEffect(()=>{
        setnavigateToUploadPage(false)
   },[])

   const handleAddModel = (e) =>{
    seterrMsg('')
    setloading(true)
    // if(model === '' || modelName.trim() === '' || modelDescription.trim() === '' || coverPhoto === ''){
    //     seterrMsg('please fill in all the fields')
    //     setloading(false)
    // }else{
      setloading(true)
        seterrMsg('')
        let formData = new FormData();
        formData.append('coverPhoto', coverPhoto);
        formData.append('model',model)
        const userData= {
            'modelName': modelName,
            'modelDescription': modelDescription,
            'files':formData
        }
        try{
          axios({
            method: 'post',
            headers:{'Content-Type': 'multipart/form-data'},
            // headers: {'Authorization': 'orion'},
            url: 'http://localhost:3001/uploadTest',
            data:formData,
          })
          .then(res =>{
           console.log(res)
          setloading(false)
        //   navigate('/dashboard')
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
        
    // }

  }
  return (
    <div className='AddModel'>
        <nav>
            <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                }
            </div>
            <h1>Models</h1>
            <div className="userInfo">
                <div className="img"><img src="/img/avatar_male.png" alt="" /></div>
                <select name="" id="">
                    <option value="">tobi</option>
                </select>
            </div>
        </nav>
        <main>
            <div className='backBtnWrapper' onClick={()=>setpage('allModels')}>
                {
                mode
                    ?
                <div className="back"><img src="/img/back (5).png" alt="" /></div>
                :
                <div className="back"><img src="/img/back (4).png" alt="" /></div>
                }
                <p>back</p>
            </div>
            <h1>Add models</h1>
            <div className="Wrapper">
            <div className="textInput">
                <input type="text" value={modelName} onChange={(e)=>setmodelName(e.target.value)} placeholder='Model Name' />
                <input type="text" value={modelDescription} onChange={(e)=>setmodelDescription(e.target.value)} placeholder='Model Description' />
            </div>
            <div className="fileContainer">
                <div className='uploadImgWrapper'>
                    {
                        mode
                        ?
                        <div className="img"><img src="/img/cloud-computing (1).png" alt="" /></div>
                        :
                        <div className="img"><img src="/img/cloud-computing.png" alt="" /></div>
                    }
                </div>
                <div className="info">
                    <h3>Choose a model to upload</h3>
                    <p>JPEG, PNG, PDG, and Mp4 formats, up to 50MB</p>
                </div>
                <div id="fileupload" >
                        <label className="myui-button">
                            <span >Browse Files</span>
                            <input id="file" type="file" onChange={(e)=>setmodel(e.target.files[0])} name="files[]" />
                        </label>
                </div>
            </div>
            <div className="fileContainer">
                <div className='uploadImgWrapper'>
                    {
                        mode
                        ?
                        <div className="img"><img src="/img/cloud-computing (1).png" alt="" /></div>
                        :
                        <div className="img"><img src="/img/cloud-computing.png" alt="" /></div>
                    }
                </div>
                <div className="info">
                    <h3>Choose a cover photo to upload</h3>
                    <p>JPEG, PNG, up to 50MB</p>
                </div>
                <div id="fileupload2" >
                        <label className="myui-button">
                            <span >Browse Files</span>
                            <input id="file"  onChange={(e)=>setcoverPhoto(e.target.files[0])} type="file" name="files[]" />
                        </label>
                </div>
            </div>
            <p className='errMsg'>{errMsg}</p>
            <div className="btnContainer">
                {/* <Link to='/addModelData'> */}
                {/* <button>Upload Model</button> */}
                {/* </Link> */}
                <button onClick={handleAddModel}>Sign in</button>

                {/* {
                    loading
                    ?
                    <button><div className="round">loading</div></button>
                    :
                    <button onClick={handleAddModel}>Sign in</button>
                } */}
            </div>
            </div>
        </main>
    </div>
  )
}

export default AddModel