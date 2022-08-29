import { useState } from "react";
import Card from "./Card";
import "./Menu.css";

function Menu(props) {

  const cards = [
    {
      id: 1,
      wineImg:
        "https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg",
      category: "Red Wine",
      imgTxtDown: "Burgundy",
      name: "Pinot Noir",
      description:
        "red-wine grape variety of the species Vitis vinifera, the name may also refer to wines created predominantly from pinot noir grapes",
      price: "$" + 89.99,
      stars: 5,
    },
    {
      id: 2,
      wineImg:
        "https://images.pexels.com/photos/8472737/pexels-photo-8472737.jpeg",
      category: "White Wine",
      imgTxtDown: "Burgundy",
      name: "Chardonnay",
      description:
        "green-skinned grape variety used in the production of white wine, the variety originated in the Burgundy wine region of eastern France",
      price: "$" + 55.99,
      stars: 4,
    },
    {
      id: 3,
      wineImg:
        "https://images.pexels.com/photos/8472728/pexels-photo-8472728.jpeg",
      category: "Red Wine",
      imgTxtDown: "Bordeaux",
      name: "Bordeaux",
      description:
        "refers to a wine from Bordeaux, France, over 86% of Bordeaux wines are red wines made with Merlot, Cabernet Sauvignon and Cabernet Franc",
      price: "$" + 79.99,
      stars: 5,
    },
  ];

  const [cardsCategory, setCardsCat] = useState('All');
  const [display, setDispley] = useState("grid");

  var wineType = "All";
  function handleClick(setWineType) {
    wineType = setWineType;
    setCardsCat(wineType)
  }

  return (
    <div className="my-5">

      <div className="d-flex justify-content-between mx-5">
        <div className="d-flex justify-content-evenly">

      <form className="d-flex">
      <select value={wineType} onChange={(e) => setCardsCat(e.target.value)}>
        <option><a href="#" onClick={() => handleClick("All")}>All</a></option>
        <option><a href="#" onClick={() => handleClick("Red Wine")}>Red Wine</a></option>
        <option><a href="#" onClick={() => handleClick("White Wine")}>White Wine</a></option>
        <option><a href="#" onClick={() => handleClick("Rosé Wine")}>Rosé Wine</a></option>
        <option><a href="#" onClick={() => handleClick("Sparkling Wine")}>Sparkling Wine</a></option>
        <option><a href="#" onClick={() => handleClick("Dessert Wine")}>Dessert Wine</a></option>
      </select>  
      </form>

        </div>

        <div class="d-grid gap-2 d-md-block mx-3">
          <button
            onClick={(e) => setDispley("list")}
            class="styleBtn rounded mx-3"
            type="button">
            <i class="bi bi-text-center"></i>
          </button>
          <button
            onClick={(e) => setDispley("grid")}
            class="styleBtn rounded"
            type="button">
            <i class="bi bi-grid-3x3"></i>
          </button>
        </div>
      </div>
      <div className={display}>
      {cards
          .filter((card) => card.category === cardsCategory || cardsCategory === "All")
          .map((card) => (
          <Card key={card.id} data={card} wineType={wineType} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
