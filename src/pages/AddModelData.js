import React,{useContext,useEffect,useState} from 'react'
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
    const [description, setdescription] = useState('')
    const [type, settype] = useState('')
    const [info, setinfo] = useState()
    const [customData, setcustomData] = useState([])
    const [add, setadd] = useState(true)
    const [count, setcount] = useState(0)
    let testData=[]
    let containerr=[]
//   const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({screen:true,});


    useEffect(()=>{
        let a=document.getElementById('myid')
        a.classList.add('none')

    },[])


    let Optionss=['type of input field','text','tel','date','month','time','password']

    const createInputElement=()=>{
        let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
        let div=document.createElement('div')
        let input=document.createElement('input')
        let select=document.createElement('select')
        let button=document.createElement('button')
       
        for(var i=0;i<Optionss.length;i++){     
            var opt = document.createElement("option"); 
            opt.text = Optionss[i];
            opt.value = Optionss[i];
            select.options.add(opt);      
        }
        button.innerText='Craete custom tag'
        input.setAttribute('placeholder','enter decsription of tag')
       
        div.classList.add('inputWrapper')
        div.classList.add('customTagWrapper')
        div.appendChild(input)
        div.appendChild(select)
        div.appendChild(button)
        

        additionalInputsWrapper.appendChild(div)
        button.onclick=()=>{
            if(input.value.trim().length > 0 && select.value !== 'type of input field'){
                // button.disabled=false
                appendInputElement(input.value,select.value)
                additionalInputsWrapper.removeChild(div)
            }else{
                alert('enter description')
                
            }
        }
    }
    const appendInputElement=(data,type)=>{
    let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')

        let div=document.createElement('div')
        let input=document.createElement('input')
        let p=document.createElement('p')
        p.innerText=data
        input.setAttribute('type',type==='type of input field'? 'text' : type)
        div.classList.add('inputWrapper')
        div.appendChild(p)
        div.appendChild(input)
        additionalInputsWrapper.appendChild(div)
}

const getInputValue=()=>{
    //    let a=document.getElementById('dynamicInput')
    //    let a=document.querySelectorAll('.additionalInputsWrapper .inputWrapper')[1]
       document.querySelectorAll('.additionalInputsWrapper .inputWrapper').forEach(item=>{
            testData.push({
                description:item.innerText,
                value:item.lastChild.value
            })

       })
       let data={
        apc:'apc',
        time:'3:45pm',
        location:'wuse 2 abuja nigeria',
        value:testData
        }
       console.log(data)
   
    }
    console.log(containerr)
    console.log(testData)

    const getSelected=(e)=>{
        console.log(e)
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
           ll
           <select value='select one' onChange={(e)=>getSelected(e)}>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
           </select>
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
                <div className="additionalInputsWrapper ">

                </div>
                {/* <div className="inputWrapper customTagWrapper">
                    <input type="text" placeholder='enter title of tag'/>
                    <select name="" id="">
                        <option value="">select input type</option>
                        <option value="text">text</option>
                        <option value="password">password</option>
                        <option value="date">date</option>
                        <option value="email">email</option>
                    </select>
                    <textarea placeholder='enter data' ></textarea>
                    <button>Create custom tag</button>
                </div> */}
                <div className="btnContainer viewModelBtn" onClick={createInputElement}><button>View Model</button></div>
                <div className="btnContainer updateModelBtn" onClick={getInputValue}><button>Update Model</button></div>
                     <button >test</button>
                     {/* <div className="confirmationModalWrapper">
                        <div className="confirmationModal">
                            lmfvhkh
                        </div>
                    </div> */}
            </div>
         </div>

    </div>
  )
}

export default AddModelData

// const createInputElement=()=>{
//     // let count=0
//     // let inpvalue=[];
//     // const [dynamicInput, setdynamicInput] = useState()
//     let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
//     let div=document.createElement('div')
//     let input=document.createElement('input')
//     let p=document.createElement('p')
//     let textarea=document.createElement('textarea')
//     p.innerText='description'
//     input.setAttribute('placeholder','new input')
//     textarea.setAttribute('placeholder','enter information')
//     input.setAttribute('type','password')
//     inpObjValue.name=p.innerText
//     // input.onchange=(e)=>inpObjValue.value=e.target.value
//     input.onchange=(e)=>inpvalue.push({
//         name:p.innerText,
//         value:e.target.value
//     })
//     div.classList.add('inputWrapper')
//     div.appendChild(p)
//     div.appendChild(input)
//     additionalInputsWrapper.appendChild(div)
//     // count = count + 1

//     // console.log(div)
//     // console.log(additionalInputsWrapper)
//     // console.log(inpvalue)
//     // console.log(count)
// }