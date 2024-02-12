import React, { createRef, useState } from "react";
import AddModelData from "./AddModelData";
import { useScreenshot } from "use-react-screenshot";
import Text from "./Text";

const ScreenShot3= () => {
  const ref = createRef(null);
  const [width, setWidth] = useState(300);
  const [image, takeScreenShot] = useScreenshot();

  const getImage = () => takeScreenShot(ref.current);

  return (
    <div>
      <div>
        <button style={{ marginBottom: "10px" }} onClick={getImage}>
          Take screenshot
        </button>
        <label style={{ display: "block", margin: "10px 0" }}>
          Width:
          <input value={width} onChange={e => setWidth(e.target.value)} />
        </label>
      </div>
      <div style={{width:'100%',height:'70%'}}>
      <img width={'100%'} height={'100%'} src={image} alt={"ScreenShot"} />
      </div>
      <div
        ref={ref}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        {/* <Text/> */}
        <AddModelData/>
      </div>
    </div>
  );
};
export default ScreenShot3
