import React,{useContext} from 'react'
import '../styles/AllUsers.css'
import { imgData } from '../components/img/img'
import { contextWrapper } from '../App'


const AllUsers = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , ,setpage, , setmobile]=contextData
  return (
    <div className='AllUsers'>
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
                <input type="text" name="" placeholder='Search users' />
                <div className="filter">
                    <p>Search</p>
                </div>
            </div>

            <div className="addModel" onClick={()=>setpage('addUser')}>
                    <div className="img"><img src="/img/add.png" alt="" /></div>
                    <p>Add User</p>
            </div>

            <div className="AllUsersWrapper">
                {
                    imgData.map(item=>{
                        return <div className="recentlyUpdatedModels" key={item.id}>
                        <div className="wrapper">
                           <div className="img"><img src={item.src} /></div>
                           <div className="modelInfo">
                                <h3>{item.name}</h3>
                                <p>21 ruthy,Us</p>
                           </div>
                        </div>
                        <select name="" className='rank' id="">
                            <option value="tagger">tagger</option>
                            <option value="reviewer">reviewer</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <div className="btnContainer">
                            <button>View model</button>
                            <div className='deleteIconWrapper'>
                                {
                                    mode
                                    ?
                                    <div className="img" onClick={()=>setmobile(true)}><img src="/img/delete (1).png" alt="" /></div>
                                    :
                                    <div className="img" onClick={()=>setmobile(true)}><img src="/img/delete.png" alt="" /></div>
                                }
                            </div>
                            {/* <div className="img"><img src="/img/delete.png" alt="" /></div> */}
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
        </main>
    </div>
  )
}

export default AllUsers