import * as OV from 'online-3d-viewer';
import React, { createRef, useState, useEffect } from "react";

OV.SetExternalLibLocation ('/build/libs');
OV.Init3DViewerElements ();

const GetScreenshot = () => {

    const [backendData, setBackendData] = useState([{}]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/api')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBackendData(data);
    //         });
    // }, []);

    return (
        <div>
            <h1>Get Screenshot</h1>
            <button onClick={setBackendData}>Get Screenshot</button>
            <div 
              className="online_3d_viewer"
              sx={{width: "600px", height: "500px"}}
              model="models/box.stl">
            </div>
        </div>
    );
};

export default GetScreenshot;