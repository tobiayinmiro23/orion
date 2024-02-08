import React, { useRef, useState } from 'react'
import { useScreenshot ,createFileName} from 'use-react-screenshot'
import Login from './Login';

 
  

const ScreenShot2 = () => {
    const ref = useRef(null)
    const [image, takeScreenshot] = useScreenshot(
        {
            type: "image/jpeg",
            quality: 1.0
          }
    )
    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
      };
    const getImage = () => takeScreenshot(ref.current)

    const downloadScreenshot = () => takeScreenshot(ref.current).then(download);
  return (
    <div >
         <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
        <button onClick={downloadScreenshot}>download</button>
        <div ref={ref}>
            <Login/>
        </div>
        
    </div>
  )
}

export default ScreenShot2