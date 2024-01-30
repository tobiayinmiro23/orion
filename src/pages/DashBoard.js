import React,{useState} from 'react'
import '../styles/DashBoard.css'
import { imgData } from '../components/img/img'

const DashBoard = ({handleMenu}) => {
    const [taggerProfile, settaggerProfile] = useState([])
    const [modelProfile, setmodelProfile] = useState([])
    const [recentUpdates, setrecentUpdates] = useState([])

    for(let i=0; i< imgData.length; i++){
        taggerProfile.push(
        <div className='taggersProfile' key={imgData[i].id}>
            <div className="img"><img src={imgData[i].src} alt="" /></div>
            <h3>{imgData[i].name}</h3>
            <div className="btnContainer"><button>View profile</button></div>
        </div>
        )
        if(i === 2){break;}

    }

    for(let i=0; i< imgData.length; i++){
        modelProfile.push(
        <div className='taggersProfile' key={imgData[i].id}>
            <div className="img"><img src={imgData[i].src} alt="" /></div>
            <h3>{imgData[i].name}</h3>
            <p>12 hours ago</p>
            <div className="btnContainer"><button>View profile</button></div>
        </div>
        )
        if(i === 2){break;}

    }

    for(let i=0; i< imgData.length; i++){
        recentUpdates.push(
        <div className="recentlyUpdatedModels">
        <div className="wrapper">
           <div className="img"><img src={imgData[i].src} /></div>
           <div className="modelInfo">
                <h3>{imgData[i].name}</h3>
                <p>21 ruthy,Us</p>
           </div>
        </div>
        <div className="btnContainer"><button>View model</button></div>
    </div>
        )
        if(i === 2){break;}

    }
  return (
    <div className='DashBoard'>
        <nav>
            <h1>Dashboard</h1>
            <div className="userInfo">
                <div className="img"><img src="/img/avatar_male.png" alt="" /></div>
                <select name="" id="">
                    <option value="">tobi</option>
                </select>
                <div className="menu" onClick={()=>handleMenu(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
            </div>

        </nav>
        <main>
            <div className="generaModelInfoWrapper">
                <div className='green'>
                    <p>total model uploaded</p>
                    <h1>789</h1>
                </div>
                <div >
                    <p>total users</p>
                    <h1>789</h1>
                </div>
                <div>
                    <p>updated model </p>
                    <h1>789</h1>
                </div>
                <div className='red'>
                    <p>deleted model </p>
                    <h1>789</h1>
                </div>
            </div>

            <div className="generalTaggerInfoWrapper">
                <div className="generalTaggerInfo">
                    <h1>Recent tagger</h1>
                    <div className='taggersProfileWrapper'>
                        {taggerProfile}
                    </div>
                    <div className="viewAllTagger"><button>View all tagger</button></div>
                </div>
                {/* <div className="generalModelInfo"> */}
                <div className="generalTaggerInfo">
                    <h1>Recent model</h1>
                    <div className='modelProfileWrapper'>
                        {modelProfile}
                    </div>
                    <div className="viewAllTagger"><button>View all tagger</button></div>
                </div>

            </div>

            <div className="recentUpdates">
                <div className="info">
                    <h3>Recently updated</h3>
                    <div className="">
                        <p>View all</p>
                    </div>
                </div>
                {recentUpdates}
             
                
            </div>
        </main>
    </div>
  )
}

export default DashBoard