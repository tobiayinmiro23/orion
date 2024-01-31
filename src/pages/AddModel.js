import React from 'react'
import '../styles/AddModel.css'

const AddModel = ({handleMenu}) => {
  return (
    <div className='AddModel'>
        <nav>
            <div className="menu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
            <h1>Models</h1>
            <div className="userInfo">
                <div className="img"><img src="/img/avatar_male.png" alt="" /></div>
                <select name="" id="">
                    <option value="">tobi</option>
                </select>
            </div>
        </nav>
        <main>
            <h1>Add models</h1>
            <div className="Wrapper">
            <div className="textInput">
                <input type="text" placeholder='Model Name' />
                <input type="text" placeholder='Model Description' />
            </div>
            <div className="fileContainer">
                <div className="img"><img src="/img/cloud-computing.png" alt="" /></div>
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
                <div className="img"><img src="/img/cloud-computing.png" alt="" /></div>
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
            <div className="btnContainer"><button>Upload Model</button></div>
            </div>
        </main>
    </div>
  )
}

export default AddModel