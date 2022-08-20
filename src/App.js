// import logo from './logo.svg';
// import './App.css';

import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App(props) {
  return (
    <>
      <Header name=" Wines On Meal" />
      <Menu winetype={props.winetype}/>

      {/* <Card
          wineImg="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg"
          imgTxtUp="Pinot noir"
          imgTxtDown="Burgundy"
          name="Pinot Noir"
          description="red-wine grape variety of the species Vitis vinifera, the name may also refer to wines created predominantly from pinot noir grapes"
          price={"$" + 89.99}
          stars={5 + " stars"}
        />
        <Card
          wineImg="https://images.pexels.com/photos/8472737/pexels-photo-8472737.jpeg"
          imgTxtUp="Chardonnay"
          imgTxtDown="Burgundy"
          name="Chardonnay"
          description="green-skinned grape variety used in the production of white wine, the variety originated in the Burgundy wine region of eastern France"
          price={"$" + 55.99}
          stars={4 + " stars"}
        />
        <Card
          wineImg="https://images.pexels.com/photos/8472728/pexels-photo-8472728.jpeg"
          imgTxtUp="Bordeaux"
          imgTxtDown="Bordeaux"
          name="Bordeaux"
          description="refers to a wine from Bordeaux, France, over 86% of Bordeaux wines are red wines made with Merlot, Cabernet Sauvignon and Cabernet Franc"
          price={"$" + 79.99}
          stars={5 + " stars"}
        /> */}
    </>
  );
}

export default App;