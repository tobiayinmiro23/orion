import React from 'react'
import { useNavigate ,Link} from "react-router-dom";
import '../styles/AddModelData.css'

const AddModelData = ({mode,setnavigateToUploadPage}) => {
    const navigate= useNavigate();

    const Back =()=>{
        setnavigateToUploadPage(true)
        navigate('/dashboard')
    }
  return (
    <div className={mode ? 'AddModelDataContainerDark' : 'AddModelDataContainerlight'}>
         <div className="AddModelData">
            <div className="modelWrapper">
           <Link to='/dashboard'>
           <div className='backBtnWrapper' onClick={()=>setnavigateToUploadPage(true)}>
                     {
                    mode
                     ?
                    <div className="back"><img src="/img/back-arrow.png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back.png" alt="" /></div>
                     }
                <p>back</p>
                </div>
           </Link>
            </div>
            <div className="modelInfoWrapper">
                <h1>Input model data</h1>
                <div className="inputWrapper">
                    <p>Listeria</p>
                    <select name="" id="">
                        <option value="data">Click to select Listeria</option>
                        <option value="dummy data">dummy data</option>
                    </select>
                </div>
                <div className="inputWrapper">
                    <p>APC</p>
                    <input type="number" placeholder='0 - 1000'/>
                </div>
                <div className="inputWrapper">
                    <p>Salmonella</p>
                    <select name="" id="">
                        <option value="data">Click to select Salmonella</option>
                        <option value="dummy data">dummy data</option>
                    </select>
                </div>
                <div className="inputWrapper">
                    <p>Date</p>
                    <input type="date" />
                </div>
                <div className="inputWrapper">
                    <p>Time</p>
                    <input type="time" />
                </div>
                <div className="inputWrapper">
                    <p>Type of sample</p>
                    <input type="text" placeholder='Type in your sample'/>
                </div>
                <div id="fileupload2" >
                    <p>Evidence</p>
                        <label className="myui-button">
                            <span >Browse Files</span>
                            <input id="file" type="file" name="files[]" />
                        </label>
                </div>
                <div className="btnContainer viewModelBtn"><button>View Model</button></div>
                <div className="btnContainer updateModelBtn"><button>Update Model</button></div>

            </div>
         </div>

    </div>
  )
}

export default AddModelData