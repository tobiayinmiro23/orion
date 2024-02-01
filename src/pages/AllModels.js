import React from 'react'
import '../styles/AllModels.css'
import { imgData } from '../components/img/img'
const AllModels = ({handleMenu,mode,setpage}) => {
  return (
    <div className='AllModels'>
         <nav>
            <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
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
                <div className="addModel" onClick={()=>setpage('addModel')}>
                    <div className="img"><img src="/img/add.png" alt="" /></div>
                    <p>Add model</p>
                </div>
                <div className="removeModel">
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
                        <div className="img"><img src={item.src} alt="" /></div>
                        <div className="btnContainer viewModelBtn"><button>View Model</button></div>
                        <div className="btnContainer updateModelBtn"><button>Update Model</button></div>

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
        </main>
    </div>
  )
}

export default AllModels