import React from 'react';
import { HeaderStyled } from "../components/styled/Header.styled";
import { FaMoon, FaSun } from "react-icons/fa"

const Header = ({handleTheme, set}) => {
  return (
    <HeaderStyled>
      <div className='Logo'><p style={{ color: "orangered" }}>LOAN</p></div>
      <div className='Title'>
       <p style={{ color: "white" }}>CHECK WETHER YOU ARE QUALIFIED FOR ANY LOAN</p>
       <p style={{ color: "white" }}>ARE YOU QUALIFIED</p>
      </div>
      <div className='Theme' onClick={handleTheme}>
       <p style={{ color: "white" }}>{set ? <FaMoon size={20}/> : <FaSun size={20}/>}</p>
      </div>
    </HeaderStyled>
  );
}

export default Header;
