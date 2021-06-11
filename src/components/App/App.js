import './App.css';
import React, {useState} from "react";
import Header from "../Header/Header"
import Balance from "../Balance/Balance"
import IncomeExpenses from "../IncomeExpenses/IncomeExpenses"
import TransationList from "../TransationList/TransationList"
import AddTransation from "../AddTransation/AddTransation"
import styled, {ThemeProvider} from "styled-components";
import {GlobalProvider} from "../../context/GlobalState"
import {GlobalStyles, darkTheme, lightTheme} from "../GlobalStyle";
import ToggleButton from "../ToggleButton"

function App() {
  const [theme, toggleTheme] = useState('dark');
  const themeMode = theme=="light" ? lightTheme :darkTheme;

  const clickHandler = () =>{
    (theme=="light") ? toggleTheme('dark') : toggleTheme('light');
  }

  return (
    <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
          <GlobalProvider>
            <ToggleButton theme={theme} method={clickHandler}/>
            <div>
            <Header/>
              <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransationList/>
                <AddTransation/>
              </div>
            </div>
          </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
