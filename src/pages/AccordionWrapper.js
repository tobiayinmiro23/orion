import React from 'react'
import '../styles/AccordionWrapper.css'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

const AccordionWrapper = ({data}) => {
  
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
      console.log(panel)
    };
    const changeStyle=(e)=>{
        console.log(e.target.parentElement)

    }
  return (
    <div className='Accordionn'>
        <div>
          {
             
            data.map(item=>{
        return  <Accordion key={item.id} className='accordionWrapper' id='accordionWrapper'  expanded={expanded === item.id}   onChange={handleChange(item.id)}>
                {/* <div id='accordianHeader'> */}
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='white'/>}
                    // onClick={(e)=>changeStyle(e)}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    {/* <Typography className='heading'  sx={{ width: '33%', flexShrink: 0 }}> */}
                    <Typography className='heading' >
                        {/* {item.Tagger} */}
                    <div className="info"><h3>Tagger: </h3>{item.Tagger}</div>                                      
                    </Typography>
                  
                </AccordionSummary>
                {/* </div> */}
                <AccordionDetails className='details'>
                    <Typography>
                        {item.Date}
                    </Typography>
                    <div className="info"><h3>Tagger: </h3>{item.Tagger}</div>                                      
                    <div className="info"><h3>Date: </h3>{item.Date}</div>                                      
                    <div className="info"><h3>Time: </h3>{item.Time}</div>                                      
                    <div className="info"><h3>Location: </h3>{item.Location}</div>                                      
                    <div className="info"><h3>Evidence: </h3><a href="">{item.Evidence}</a></div>                                      
                    <div className="info"><h3>Listeria: </h3>{item.Listeria}</div>                                      
                    <div className="info"><h3>APC: </h3>{item.APC}</div>                                      
                    <div className="info"><h3>Salmonella: </h3>{item.Salmonella}</div>                                      
                    <div className="info"><h3>Type of sample: </h3>{item.TypeOfSample}</div>                                      
                    <div className="info"><h3>Comment box: </h3>{item.CommentBox}</div>                                      
                </AccordionDetails>
                </Accordion>
            })
          }
        </div>
    </div>
  )
}

export default AccordionWrapper