import React from "react";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Pricing from "./components/Pricing";
import { useState } from "react";

function App() {
  const [wineTypeApp, setWineTypeApp] = useState("All");
  const [selectStringApp, setSelectStringApp] = useState("Category");

  function wineTypeChg(newWineType, newSelectChg) {
    // alert("app:" + newWineType);
    setSelectStringApp(newSelectChg);
    setWineTypeApp(newWineType);
  }

  return (
    <>
      <Header name="Wines On Meal" resetChdToPerents={wineTypeChg}/>
      
      <Routes>
        <Route path='/' element={<Menu wineType={wineTypeApp} cngChdToPerents={wineTypeChg} selectString={selectStringApp}/>} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;