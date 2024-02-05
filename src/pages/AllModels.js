import React,{useState,useContext} from 'react'
import '../styles/AllModels.css'
import { imgData } from '../components/img/img'
import { contextWrapper } from '../App'

const AllModels = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , , setpage, , setmobile]=contextData

    const [deleteModel, setdeleteModel] = useState(false)
    const [confirmDelete, setconfirmDelete] = useState(false)
    const [checked, setchecked] = useState(false)
    const handleChecked=(e)=>{
        if(e.target.checked){
            console.log(e.target.parentElement.parentElement)
            // console.log(e.target.parentElement.style.opacity='0.7')
            // e.target.style.opacity='0.8'
            // e.target.style.background='red'
            // e.target.parentElement.style.opacity='1'
            // e.parentElement.parentElement.parentElement.style.opacity='1'
            // e.target.parentElement.classList.remove('opacity')


            e.target.parentElement.parentElement.parentElement.style.opacity='1'
            // console.log(e.target.parentElement.parentElement.parentElement)
            e.target.parentElement.parentElement.style.opacity='1'
            e.target.parentElement.parentElement.classList.remove('opacity')

        }else{
            e.target.parentElement.parentElement.style.opacity='0.7'
            e.target.parentElement.parentElement.classList.add('opacity')
        }
    }
    const manipulateData=()=>{
        let allCards=document.querySelectorAll('.modelCard .img')
        // console.log(allCards)
        allCards.forEach(item=>{
            item.classList.add('opacity')
            // item.style.opacity='0.7'
            // console.log(item.classList)
        })
    }
    const deleteModels= ()=>{
        setconfirmDelete(false)
        setpage('allModels')
        setdeleteModel(false)
        let allCards=document.querySelectorAll('.modelCard .img')
        allCards.forEach(item=>{
            item.classList.remove('opacity')
        })
    }
if(deleteModel){
    manipulateData()
}
  return (
    <div className='AllModels'>
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
            <div className="modelControl">
               {
                deleteModel 
                ?
                <div className='deleteModeWrapper'> 
                    <div className='backBtnWrapper' onClick={()=>setdeleteModel(false)}>
                    {
                    mode
                        ?
                    <div className="back"><img src="/img/back (5).png" alt="" /></div>
                    :
                    <div className="back"><img src="/img/back (4).png" alt="" /></div>
                    }
                    <p>back</p>
                    </div>
                    <div className="removeModel" onClick={()=>setconfirmDelete(true)}>
                        <div className='deleteIconWrapper'>
                            {
                                mode
                                ?
                                <div className="img" ><img src="/img/delete (1).png" alt="" /></div>
                                :
                                <div className="img" ><img src="/img/delete.png" alt="" /></div>
                            }
                        </div>
                        <p>Delete Selected model</p>
                    </div>
                </div>
                :
                <div className="addDelBtnWrapper">
                        <div className='btnWrapper'>
                     <div className="addModel" onClick={()=>setpage('addModel')}>
                    <div className="img"><img src="/img/add.png" alt="" /></div>
                    <p>Add model</p>
                </div>
                <div className="removeModel" onClick={()=>setdeleteModel(true)}>
                    <div className='deleteIconWrapper'>
                        {
                            mode
                            ?
                            <div className="img" ><img src="/img/delete (1).png" alt="" /></div>
                            :
                            <div className="img" ><img src="/img/delete.png" alt="" /></div>
                        }
                    </div>
                    <p>Delete model</p>
                </div>
                </div>
                </div>
               }
            </div>
            <div className="searchBarContainer">
                <div className='searchIconWrapper'>
                    {
                        mode
                        ?
                        <div className="img searchImg"><img src="/img/search (3).png" alt="" /></div>
                        :
                        <div className="img searchImg"><img src="/img/search (2).png" alt="" /></div>
                    }
                </div>
                <input type="text" name="" placeholder='Search model' />
                <div className="filter">
                    <div className="img"><img src="/img/edit.png" alt="" /></div>
                    <p>Filter</p>
                </div>
            </div>

            <div className="allModelsWrapper">
               {
                imgData.map(item=>{
                    return  <div className="modelCard" key={item.id}>
                        <div className="img" style={{ backgroundImage: `url(${item.src})` }}>
                            {/* <input type="checkbox"  name={item.id} id={item.id} />
                            <label htmlFor={item.id}>lolo</label> */}
                             {deleteModel 
                                 && 
                                <div className="checkbox">
                                    <input id={item.src} onClick={(e)=>handleChecked(e)} type="checkbox" name="check" value={item.src}/>
                                    <label for={item.src}></label>
                                </div>
                             }
                                {/* <div className="conntrolWrapper"  onClick={(e)=>setchecked(!checked)}>
                                    <div className="delImg" ><img src="/img/delete (2).png" alt="" /></div>
                                </div> */}
                            {/* <img src={item.src} alt="" /> */}
                        </div>
                        <div className="btnContainer viewModelBtn"><button>View Model</button></div>
                        <div className="btnContainer updateModelBtn">
                            <button>Update Model</button>
                            <div className="conntrolWrapper">
                                <div className="delImg" ><img src="/img/delete (2).png" alt="" /></div>
                            </div>
                            </div>

                    </div>
                })
               }
            </div>

            <div className="navigatonBtnContainer">
                <div className="div">Prev</div>
                <div className="active">1 </div>
                <div className="div"> 2</div>
                <div className="div">3 </div>
                <div className="div">4 </div>
                <div className="div">5 </div>
                <div className="div">Next </div>
            </div>
            {
                confirmDelete &&
                <div className="confirmationModalWrapper">
                <div className="confirmationModal">
                    <h1>Are you sure you want to delete?</h1>
                    <div className="btnWrapper">
                        <button className="Yes" onClick={deleteModels}
                        >Yes</button>
                        <button className="No" onClick={()=>setconfirmDelete(false)}>No</button>
                    </div>
                </div>
            </div>
            }
        </main>
    </div>
  )
}

export default AllModels