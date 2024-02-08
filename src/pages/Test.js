import React,{useState} from 'react'
// import { ReactMediaRecorder,useReactMediaRecorder } from "react-media-recorder";
import { ReactMediaRecorder ,useReactMediaRecorder} from 'react-media-recorder-2';
import { ScreenCapture } from 'react-screen-capture';
// const RecordView = () => (
 
// );
const Test = () => {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });
    const [screenCapture, setscreenCapture] = useState('')
    // state = {
    //     screenCapture: '',
    //   };
    
     const handleScreenCapture = (screenCapture) => {
        //.setState({screenCapture});
        
        setscreenCapture(screenCapture)
      };
    
     const handleSave = () => {
        const screenCaptureSource = screenCapture;
        const downloadLink = document.createElement('a');
        const fileName = 'react-screen-capture.png';
    
        downloadLink.href = screenCaptureSource;
        downloadLink.download = fileName;
        downloadLink.click();
        
      };

    const getLink=()=>{
        stopRecording()
        const downloadLink = document.createElement('a');

    downloadLink.href = mediaBlobUrl;
    // downloadLink.download = fileName;
    downloadLink.click();
        console.log(mediaBlobUrl)
    }
    const capture=()=>{
        console.log('we de')
        // onStartCapture()
    }
  return (
    <ScreenCapture  onEndCapture={handleScreenCapture}>
    {({ onStartCapture }) => (
    
        
      <div>
        {/* {
            console.log(onStartCapture)
        } */}
       <img src={screenCapture} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          distinctio exercitationem a tempore delectus ducimus necessitatibus
          dolor voluptatum aut est quaerat aspernatur, vero quod aperiam odio.
          Exercitationem distinctio in voluptates?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut molestiae
          deserunt voluptas, labore a expedita error eligendi sunt fugit, nesciunt
          ullam corrupti quas natus, officia rerum? Officia cum amet quidem.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, iusto
          repellat quae quos in rerum sunt obcaecati provident placeat hic saepe
          possimus eaque repellendus consequuntur quisquam nihil, sit ullam
          ratione.
        </p>
        <center>
        <div>
        Test
        <div>
        <button onClick={onStartCapture}>Capture</button>
    {/* <ReactMediaRecorder
    //   video
    screen
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => ( */}
        <div>
            {/* <button onClick={getLink}>download video</button> */}
            <a href={mediaBlobUrl} download={true}>link to the video</a>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls  />
        </div>
       {/* )} 
     />  */}
  </div>    
    </div>
          <img src={screenCapture} alt='react-screen-capture' />
          <p>
            {screenCapture && <button onClick={handleSave}>Download</button>}
          </p>
        </center>
      </div>
    )}
  </ScreenCapture>
);
    
  
}

export default Test