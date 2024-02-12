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

    useEffect(()=>{
        setcustomData([...customData,{
            name:description,
            type:type,
            value:info
        }])

    },[add])

    let Optionss=['type of input field','text','tel','date','month','time','password']
    const test =()=>{
        let modelWrapper=document.querySelector('.modelWrapper')

        let select=document.createElement('select')
        for(var i=0;i<Optionss.length;i++){     
            var opt = document.createElement("option"); 
            opt.text = Optionss[i];
            opt.value = Optionss[i];
            select.options.add(opt);      
        }
        modelWrapper.appendChild(select)
        // return select

    }

    // let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
    // let input=document.createElement('input')
    // let p=document.createElement('p')
    // let div=document.createElement('div')
    const setData = ()=>{
        setcustomData([...customData,{
            name:description,
            type:type,
            value:info
        }])
    }
    let inpvalue=[]
    let inpObjValue={}
    let Options=['text','tel','date','month','time','password']
    const createInputElement=()=>{
        // let inpvalue=[];
        // const [dynamicInput, setdynamicInput] = useState()
        let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
        let div=document.createElement('div')
        let input=document.createElement('input')
        let select=document.createElement('select')
        let button=document.createElement('button')
        // let p=document.createElement('p')
        // Options.map(item=>{
        //     option.value=item
        // })
        for(var i=0;i<Optionss.length;i++){     
            var opt = document.createElement("option"); 
            opt.text = Optionss[i];
            opt.value = Optionss[i];
            select.options.add(opt);      
        }
        // let textarea=document.createElement('textarea')
        button.innerText='Craete custom tag'
        input.setAttribute('placeholder','enter decsription of tag')
        input.id=`dynamicInput${count}`
        // input.setAttribute('type',)
        // textarea.setAttribute('placeholder','enter information')
        input.setAttribute('type','password')
        // inpObjValue.name=p.innerText
        // input.onchange=(e)=>inpObjValue.value=e.target.value
        let textAreaData
        let options
        // let name=''
        // textarea.onchange=(e)=>{ setinfo(e.target.value)}
        select.onchange=(e)=>{ settype(e.target.value)}
        input.onchange=(e)=>{setdescription(e.target.value)}
        // input.onchange=(e)=>{.push(e.target.value)}

        // textarea.onchange=(e)=>setinfo(e.target.value)
        
        // textarea.onchange=(e)=>inpvalue.push({
        //     name:description,
        //     type:type,
        //     value:e.target.value
        // })
        inpvalue.push(`dynamicInput${count}`)
       
            let newItem ={
                    name:description,
                    type:type,
                    value:info
                }
        div.classList.add('inputWrapper')
        div.classList.add('customTagWrapper')
        // div.appendChild(p)
        // select.appendChild(option)
        div.appendChild(input)
        div.appendChild(select)
        // div.appendChild(textarea)
        div.appendChild(button)
        additionalInputsWrapper.appendChild(div)
        button.onclick=()=>{
            appendInputElement(input.value,select.value)
            additionalInputsWrapper.removeChild(div)
        }


        // console.log(div)
        // console.log(additionalInputsWrapper)
        // button.onclick=()=>console.log(inpvalue)
        // console.log(count)
        // setcustomData([...customData,{
        //     name:description,
        //     type:type,
        //     value:info
        // }])
        // setData()
        // setadd(true)
       setcount( count + 1)

    }
    const appendInputElement=(data,type)=>{
    let additionalInputsWrapper=document.querySelector('.additionalInputsWrapper')
    // let div=document.createElement('div')
    // let input=document.createElement('input')
    // let p=document.createElement('p')
    // let textarea=document.createElement('textarea')
    // p.innerText='description'
    // input.setAttribute('placeholder','new input')
    // textarea.setAttribute('placeholder','enter information')
    // input.setAttribute('type','password')

    // inpvalue.map(item=>{
        let div=document.createElement('div')
        let input=document.createElement('input')
        let p=document.createElement('p')
        p.innerText=data
        input.setAttribute('type',type==='type of input field'? 'text' : type)
        // input.value=item.value
        div.classList.add('inputWrapper')
        div.appendChild(p)
        div.appendChild(input)
        additionalInputsWrapper.appendChild(div)
        // return additionalInputsWrapper
    // })

    // inpObjValue.name=p.innerText
    // // input.onchange=(e)=>inpObjValue.value=e.target.value
    // input.onchange=(e)=>inpvalue.push({
    //     name:p.innerText,
    //     value:e.target.value
    // })
    // div.classList.add('inputWrapper')
    // div.appendChild(p)
    // div.appendChild(input)
    // additionalInputsWrapper.appendChild(div)
    // count = count + 1

    // console.log(div)
    // console.log(additionalInputsWrapper)
    // console.log(inpvalue)
    // console.log(count)
}
    // containerr
    const getInputValue=()=>{
    //    let a=document.getElementById('dynamicInput')
    //    let a=document.querySelectorAll('.additionalInputsWrapper .inputWrapper')[1]
       document.querySelectorAll('.additionalInputsWrapper .inputWrapper').forEach(item=>{
            testData.push({
                description:item.innerText,
                value:item.lastChild.value
            })

       })
       console.log(testData)
    //    console.log(a.innerText)
    //    console.log(a.lastChild.value)
    //     console.log(inpvalue)
        // inpvalue.map(item=>{
        //     containerr.push({
        //        value: document.querySelector(`#${item}`).value
        //     })
        // })

        // console.log(type)
        // console.log(info)
        // console.log(description)
        
       
        // console.log(customData)
        // console.log(inpObjValue)
        // containerr.push({
        //     name:description,
        //     type:type,
        //     value:info
        // })
        // console.log(containerr)
    }
    console.log(containerr)
    console.log(testData)

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
                     <button onClick={appendInputElement}>test</button>
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