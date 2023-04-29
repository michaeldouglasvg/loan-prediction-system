import React, { useState, useEffect } from "react"
import Header from "./pages/Header"
import Bodysection from "./pages/Bodysection"
import { ThemeProvider } from "styled-components"
import Globalstyles from "./components/styled/Global/Global.uni"
import Mainloader from "./components/universals/Mainloader"
import { FromApplicationContext } from "./context/form-context"
import Resultspage from "./pages/Resultspage"

function App() {
  const[themeset, setNewTheme] = useState(true);
  const[mainloader, setMainloader] = useState(true);

  const setNewThemestate = () => {
    setNewTheme(!themeset)
  }


  const theme = {
    colors: {
      header: "skyblue",
      body: themeset ? 'whitesmoke': "rgb(39, 29, 29)",
      footer: "grey ",
      color: themeset ? "black" : "white"
    },

    responsive: {
      mobilesm: "426px",
      mobilemd: "769px",
      mobilelg: "1025px"
    }
  }

  // Function to set interval when 3sec are over
  useEffect(() => {
    const interval = setInterval(() => {
      setMainloader(false)
    }, 3000);

    return () => clearInterval(interval);
  });

  return (

    <ThemeProvider theme={theme}>
      <FromApplicationContext>
      <>
       {mainloader && <Mainloader />}
        <Globalstyles />

        <Header handleTheme={setNewThemestate} set={themeset}/>

        <Resultspage />

        <Bodysection/>
      </>
      </FromApplicationContext>
    </ThemeProvider>
    
  );
}

export default App;
