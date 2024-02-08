import React,{useContext,useEffect} from 'react'
import { useNavigate ,Link} from "react-router-dom";
import '../styles/AddModelData.css'
import { contextWrapper } from '../App'
// import { useReactMediaRecorder ,ReactMediaRecorder} from "react-media-recorder";

// const RecordView = () => {

//   return (
   
//   );
// };

const AddModelData = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , , , , , ,setnavigateToUploadPage]=contextData
//   const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({screen:true,});


    useEffect(()=>{
        let a=document.getElementById('myid')
        a.classList.add('none')
    },[])

    // let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
    // let input=document.createElement('input')
    // let p=document.createElement('p')
    // let div=document.createElement('div')
    let count=0

    let inpvalue=[];
    let inpObjValue={}
    const createInputElement=()=>{
        // let count=0
        // let inpvalue=[];
        // const [dynamicInput, setdynamicInput] = useState()
        let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
        let div=document.createElement('div')
        let input=document.createElement('input')
        let p=document.createElement('p')
        p.innerText='description'
        input.setAttribute('placeholder','new input')
        input.setAttribute('type','password')
        inpObjValue.name=p.innerText
        // input.onchange=(e)=>inpObjValue.value=e.target.value
        input.onchange=(e)=>inpvalue.push({
            name:p.innerText,
            value:e.target.value
        })
        div.classList.add('inputWrapper')
        div.appendChild(p)
        div.appendChild(input)
        additionalInputsWrapper.appendChild(div)
        // count = count + 1

        // console.log(div)
        // console.log(additionalInputsWrapper)
        // console.log(inpvalue)
        // console.log(count)
    }
    const getInputValue=()=>{
        console.log(inpvalue)
        // console.log(inpObjValue)
        console.log(count)
    }
    const sendData=()=>{
        let name=inpvalue.map(item=>{
            return item.name
        })
        let value=inpvalue.map(item=>{
            return item.value
        })
        let data={
            apc:'apc',
            time:'3:45pm',
            location:'wuse 2 abuja nigeria',
            name:value
        }
        console.log(data)
        console.log(name)
        console.log(value)
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
                    <div className="back"><img src="/img/back (5).png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back (4).png" alt="" /></div>
                     }
                <p>Back</p>
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
                <div className="additionalInputsWrapper">

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
                <div className="btnContainer viewModelBtn" onClick={createInputElement}><button>View Model</button></div>
                <div className="btnContainer updateModelBtn" onClick={getInputValue}><button>Update Model</button></div>
                     <button onClick={sendData}>test</button>
                   
            </div>
         </div>

    </div>
  )
}

export default AddModelData