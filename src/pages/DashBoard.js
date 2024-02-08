import React,{useState,useContext} from 'react'
import '../styles/DashBoard.css'
import { imgData } from '../components/img/img'
import { contextWrapper } from '../App'
import { CategoryScale } from 'chart.js'
import PieChart from '../components/PieChart'
// import { Chart } from 'react-chartjs-2'
import Chart from "chart.js/auto";
import BarChart from '../components/BarChat'


Chart.register(CategoryScale);
const DashBoard = () => {
    const contextData=useContext(contextWrapper)
    const [mode, , , , , setmobile]=contextData
    const [taggerProfile, settaggerProfile] = useState([])
    const [modelProfile, setmodelProfile] = useState([])
    const [recentUpdates, setrecentUpdates] = useState([])

   
    // chart js data
    const Data = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234
        }
      ];
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

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
        <div className="recentlyUpdatedModels" key={imgData[i].id}>
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
            <div className='menuWrapper'>
                {
                    mode
                     ?
                     <div className="menu darkModeMenu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24 (1).png" alt="" /></div>
                    :
                    <div className="menu" onClick={()=>setmobile(true)}><img src="/img/icons8-menu-24.png" alt="" /></div>
                }
            </div>
            <h1>Dashboard</h1>
            <div className="userInfo">
                <div className="img"><img src="/img/avatar_male.png" alt="" /></div>
                <select name="" id="">
                    <option value="">tobi</option>
                </select>
            </div>
        </nav>
        <main>
            <div className="generaModelInfoWrapper">
                <div className='green'>
                    <p>model uploaded</p>
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

            <div className="chartContainer">
            <PieChart chartData={chartData} />
            <BarChart chartData={chartData}/>
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