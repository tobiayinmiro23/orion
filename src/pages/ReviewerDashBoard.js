import React,{useContext} from 'react'
import '../styles/ReviewerDashBoard.css'
import { contextWrapper } from '../App'


const ReviewerDashBoard = () => {
  const contextData=useContext(contextWrapper)
  const [mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage]=contextData

  return (
    
    <div className={mode ? 'ReviewerDashBoardWraperDark' : 'ReviewerDashBoardWraper'}>
        <div className='ReviewerDashBoard'>
          <div className="threejsWrapper">
              <div>bbbbb</div>
          </div>
          <div className="dataWrapper">
                <div className="dataHistoryWrapper">
                      <div className="header">
                        <h1>Data History</h1>
                        <div className='menuWrapper'>
                          {
                              mode
                              ?
                              <div className="menu darkModeMenu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                              :
                              <div className="menu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                          }
                      </div>
                      
                      </div>

                      <div className="AllModels">
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
                        <input type="text" name="" placeholder='Search' />
                        <div className="filter">
                            <div className="img"><img src="/img/edit.png" alt="" /></div>
                            {/* <p>Filter</p> */}
                        </div>
                      </div>
                      </div>  
                      {/* <div className="allInfoContainer">
                        <div className="info">
                          <h3>mmm: </h3>Samuel james 
                        </div>
                        <div className="info">
                          <h3>mmm: </h3>Samuel james 
                        </div>
                        <div className="info">
                          <h3>mmm: </h3>Samuel james 
                        </div>
                        <div className="btnContainer"><button>Export Data</button></div>
                      </div> */}
                      <div className="filterCard">
                        <div className="heading">
                          <p >All time</p>
                          <p className='active'>Static Period</p>
                        </div>
                        <div className="filterInputContainer">
                          <div className="fromWrapper">
                            <h3>From</h3>
                            <div className="inputContainer">
                              <input type="date" name="" id="" />
                              <input type="time" name="" id="" />
                            </div>
                          </div>
                          <div className="fromWrapper">
                            <h3>From</h3>
                            <div className="inputContainer">
                              <input type="date" name="" id="" />
                              <input type="time" name="" id="" />
                            </div>
                          </div>
                          <div className="controlBtn">
                            <button className="apply">Apply</button>
                            <button className="cancel">Cancel</button>
                          </div>
                        </div>
                      </div>
                </div>
          </div>

        </div>
    </div>
  )
}

export default ReviewerDashBoard