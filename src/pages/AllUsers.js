import React from 'react'
import '../styles/AllUsers.css'
import { imgData } from '../components/img/img'

const AllUsers = ({handleMenu}) => {
  return (
    <div className='AllUsers'>
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
        <div className="searchBarContainer">
                <div className="img searchImg"><img src="/img/search (2).png" alt="" /></div>
                <input type="text" name="" placeholder='Search users' />
                <div className="filter">
                    <p>Search</p>
                </div>
            </div>

            <div className="addModel">
                    <div className="img"><img src="/img/add.png" alt="" /></div>
                    <p>Add model</p>
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
                            <div className="img"><img src="/img/delete.png" alt="" /></div>
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