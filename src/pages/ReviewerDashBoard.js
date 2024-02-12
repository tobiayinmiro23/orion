import React,{useContext,useState} from 'react'
import '../styles/ReviewerDashBoard.css'
import { contextWrapper } from '../App'
import AccordionWrapper from './AccordionWrapper';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';




const ReviewerDashBoard = () => {
  const contextData=useContext(contextWrapper)
  const [mode,setmode,page, setpage,mobile, setmobile,navigateToUploadPage]=contextData
  const [ReviewerState, setReviewerState] = useState('allReviewer')
  const [filterApplied, setfilterApplied] = useState(false)
  const [exportData, setexportData] = useState(false)
  const [fileExported, setfileExported] = useState(false)

    const data=[
      {
          id:1,
          Tagger:'Stony Brown',
          Date:'22/08/2022',
          Time:'4:55:25',
          Location:'16 Newwall RD, CA, USA',
          Evidence:'top_floor.jpeg',
          // Listeria:'Positive',
          Listeria:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo neque eum id tenetur odio saepe minima recusandae molestias ad consequatur. Facilis rem laudantium reiciendis fuga.',
          APC:265,
          Salmonella:'Positive',
          TypeOfSample:'Deepppe',
          CommentBox:'Cleaning not properly done, it needs to be re-cleaned'
      },
      {
          id:2,
          Tagger:'john nelson',
          Date:'22/08/2022',
          Time:'4:55:25',
          Location:'16 Newwall RD, CA, USA',
          Evidence:'top_floor.jpeg',
          Listeria:'Positive',
          APC:265,
          Salmonella:'Positive',
          TypeOfSample:'Deepppe',
          CommentBox:'Cleaning not properly done, it needs to be re-cleaned'
      },
      {
          id:3,
          Tagger:'jammy omokhagbor johnson',
          Date:'22/08/2022',
          Time:'4:55:25',
          Location:'16 Newwall RD, CA, USA',
          Evidence:'top_floor.jpeg',
          Listeria:'Positive',
          APC:265,
          Salmonella:'Positive',
          TypeOfSample:'Deepppe',
          CommentBox:'Cleaning not properly done, it needs to be re-cleaned'
      },
    ]
    const [expanded, setExpanded] =useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
  console.log(panel)
};
  const AddFilter=()=>{
    setReviewerState('filter')
  }

  const ApplyFilterButton=()=>{
    setfilterApplied(true)
    setReviewerState('allReviewer')
  }
  const ClearFilter=()=>{
    setfilterApplied(false)
    setReviewerState('allReviewer')
  }

  const CancelFilter=()=>{
    setfilterApplied(false)
    setReviewerState('allReviewer')
  }
  const CancelExport=()=>{
    setfileExported(false)
    setexportData(false)
  }

  return (
    
    <div className={mode ? 'ReviewerDashBoardWraperDark' : 'ReviewerDashBoardWraper'}>
        <div className='ReviewerDashBoard'>
          <div className="threejsWrapper">
              <div className="backContainer">
                <p>Back</p>
                <div className='img'>
                <CancelOutlinedIcon fontSize='small'/>
                </div>
              </div>
              <div>bbbbb</div>
              <div className="threejsControlWrapper">
                <div className="moveBtnWrapper">
                  <div className="left up"><VideocamOutlinedIcon/></div>
                  <div className="middle">
                    <div className="nav"><VideocamOutlinedIcon/></div>
                    <div className="nav hide"><VideocamOutlinedIcon/></div>
                    <div className="nav right"><VideocamOutlinedIcon/></div>
                  </div>
                  <div className="left down"><VideocamOutlinedIcon/></div>
                </div>
                <div className="buttonsWrapper">
                    <div className="controlContainer zoomContainer">
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                    </div>
                    <div className="separator"></div>
                    <div className="controlContainer zoomContainer">
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                    </div>
                    <div className="separator"></div>
                    <div className="controlContainer zoomContainer">
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                      <div className="ctrlImg zoom">
                            <VideocamOutlinedIcon/>
                      </div>
                    </div>
                </div>
              </div>
              {/* <img className='svg' style={{color:"red"}} src="/img/Group 289230.svg" alt="" srcset="" /> */}
          </div>

          <div className="dataWrapper">
                <div className="dataHistoryWrapper">
                  {/* header */}
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
                    {/* header end */}
                        {/* input */}
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
                        {
                          filterApplied 
                          ?
                          <div className="filter" onClick={ClearFilter}>
                           <div className="clear" >clear</div>
                          </div>
                        :
                        <div className="filter" onClick={AddFilter}>
                          <div className="img" ><img src="/img/edit.png" alt="" /></div>
                        </div>
                      }
                        {/* <div className="filter">
                          {!filterApplied  && <div className="img" onClick={()=>setReviewerState('filter')}><img src="/img/edit.png" alt="" /></div>}
                          {filterApplied && <div className="clear" onClick={ClearFilter}>clear</div>}
                        </div> */}
                        {/* <div className="filter">
                          {!filterApplied  && <div className="img" onClick={()=>setReviewerState('filter')}><img src="/img/edit.png" alt="" /></div>}
                          {filterApplied && <div className="clear" onClick={ClearFilter}>clear</div>}
                        </div> */}
                      </div>
                      </div>  
                      {/* input end */}

                      {filterApplied && <div><input type="datetime" name="" id="" /></div>}

                      {/* all info container */}
                     {
                      ReviewerState === 'allReviewer' &&
                      <div className="allInfoContainer">
                            <div className="allTaggersWrapper">
                            {/* accordion start */}
                            <AccordionWrapper data={data}/>
                            {/* accordion end */}
                            </div>
                        <div className="btnContainer" onClick={()=>setexportData(true)}><button>Export Data</button></div>
                      </div>
                      
                     }
                      {/* all info container end*/}
                       {/* filter card */}
                      {ReviewerState === 'filter'  && 
                        <div className="filterCard">
                        <div className="heading">
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
                              <input type="date" color='white' name="" id="" />
                              <input type="time" name="" id="" />
                            </div>
                          </div>
                          <div className="controlBtn">
                            <button className="cancel" onClick={ClearFilter}>Cancel</button>
                            <button className="apply" onClick={ApplyFilterButton}>Apply</button>
                          </div>
                        </div>
                      </div>
                      }
                      
                      {/* filter end */}

                </div>
          </div>
          {/* export data container */}
          {
            exportData && 
            <div className="confirmationModalWrapper">
            <div className="confirmationModal">
              <div className="cancel" onClick={CancelExport}><CancelOutlinedIcon fontSize='large'/></div>
              {/* for export controlls */}
              {

                fileExported ?
                <div className="exportSuccessful">
                <div className="wrapper">
                      <div className="img"><img src="/img/Group 215.png" alt="" /></div>
                      <h1>Account created successfully</h1>
                </div>
                </div>
              :
              <div className="exportWrapper">
              <div className="btnWrapper">
                  <button onClick={()=>setfileExported(true)} className=""><div className="menu" ><VideocamOutlinedIcon fontSize='large'/></div><p>Export video</p></button>
                  <button className=""><div className="menu"><DescriptionOutlinedIcon className="none" fontSize='large'/></div><p>Export video</p></button>
                  <button className=""><div className="menu"><ImageOutlinedIcon fontSize='large'/></div><p>Export video</p></button>
              </div>
            </div>
              }
              {/* for export successful */}
            
            </div>
            </div>
            }
          {/*export data end */}
        </div>
    </div>
  )
}

export default ReviewerDashBoard

 