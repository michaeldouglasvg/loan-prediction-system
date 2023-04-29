import React from 'react';
import { SubLoaderGlobal } from "../styled/Subloader.styled"
import { ThreeDots } from  'react-loader-spinner'

const Subloader = ({warning = "", color=""}) => {
  return (
    <SubLoaderGlobal>
    
    <ThreeDots 
      height="80" 
      width="100" 
      radius="8"
      color="#4fa94d" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
      <p style={{textAlign: "center", lineHeight: 1.5}}>{warning}</p>
      <p>Processing your request...</p>
     
    </SubLoaderGlobal>
  );
}

export default Subloader;
