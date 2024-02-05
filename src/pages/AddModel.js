import React,{useContext} from 'react'
import '../styles/AddModel.css'
import { Link } from 'react-router-dom'
import { contextWrapper } from '../App'
import { useEffect } from 'react'

const AddModel = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , , setpage, , setmobile,,setnavigateToUploadPage]=contextData
   useEffect(()=>{
        setnavigateToUploadPage(false)
   },[])
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
                <input type="text" placeholder='Model Name' />
                <input type="text" placeholder='Model Description' />
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
                            <input id="file" type="file" name="files[]" />
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
                            <input id="file" type="file" name="files[]" />
                        </label>
                </div>
            </div>
            <div className="btnContainer"><Link to='/addModelData'><button>Upload Model</button></Link></div>
            </div>
        </main>
    </div>
  )
}

export default AddModel