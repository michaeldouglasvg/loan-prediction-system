import React, { useEffect, useState } from 'react';
import { MainLoaderGlobal, LoaderSubGlobal } from "../styled/Mainloader.styled"
import { RotatingLines } from  'react-loader-spinner'

const Mainloader = () => {
  const [text, setText] = useState(true)
  const [succeful, setSuccesful] = useState(false)

   //Dynamic text loader
   useEffect(() => {
    const interval = setInterval(() => {
      setText(false)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Succesful code return 
  useEffect(() => {
    const interval = setInterval(() => {
      setSuccesful(true)
    }, 5000);

    return () => clearInterval(interval);
  }, [succeful]);


  return (
    <MainLoaderGlobal>
     <LoaderSubGlobal>
      <h2>Welcome, LMS <span>[LOANS]</span></h2>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      {text ? <p>Search loans...</p> : (!succeful && <p>Getting ready...</p>)}
      {succeful && <p>Loaded Succeful. Apply now.</p>}
     </LoaderSubGlobal>
    </MainLoaderGlobal>
  );
}

export default Mainloader;
