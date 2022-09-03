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
    {
      id: 4,
      wineImg:
        "https://images.pexels.com/photos/8472927/pexels-photo-8472927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Sparkling Wine",
      imgTxtDown: "Trieste",
      name: "Prosecco",
      description:
        "are saturated with molecules of carbon dioxide gas, which makes them fizzy or bubbly",
      price: "$" + 49.99,
      stars: 4,
    },
    {
      id: 5,
      wineImg:
        "https://images.pexels.com/photos/8472739/pexels-photo-8472739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Dessert Wine",
      imgTxtDown: "Bordeaux",
      name: "Sauternais",
      description:
        "sweet wine comes from extra-sweet grapes! To make a sweet wine, the fermentation is stopped before the yeast converts all grape sugars into alcohol",
      price: "$" + 49.99,
      stars: 4,
    },
    {
      id: 6,
      wineImg:
        "https://images.pexels.com/photos/8473009/pexels-photo-8473009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Rosé Wine",
      imgTxtDown: "Provence",
      name: "Grenache",
      description:
        "pink wine happily spans the colorspace between red and white wine, in a way, rosé is more like a state of mind",
      price: "$" + 59.99,
      stars: 4,
    },
  ];

  const [display, setDispley] = useState("grid");

  function optionClickCng(optinoNewWineType) {
    // alert("menu:" + setWineType);
    props.cngChdToPerents(optinoNewWineType, optinoNewWineType);
  }

  return (
    <div className="my-5 container">
      <div className="d-flex justify-content-between mx-5">
        <div className="d-flex justify-content-evenly">
          <form className="d-flex">
            <select value={props.selectString}>
              <option value="" hidden>
                Category
              </option>
              <option onClick={() => optionClickCng("All")}>All</option>
              <option onClick={() => optionClickCng("Red Wine")}>Red Wine</option>
              <option onClick={() => optionClickCng("White Wine")}>
                White Wine
              </option>
              <option onClick={() => optionClickCng("Rosé Wine")}>
                Rosé Wine
              </option>
              <option onClick={() => optionClickCng("Sparkling Wine")}>
                Sparkling Wine
              </option>
              <option onClick={() => optionClickCng("Dessert Wine")}>
                Dessert Wine
              </option>
            </select>
          </form>
        </div>

        <div class="d-grid gap-2 d-md-block mx-3">
          <button
            onClick={(e) => setDispley("list")}
            class="styleBtn rounded mx-3"
            type="button"
          >
            <i class="bi bi-text-center"></i>
          </button>
          <button
            onClick={(e) => setDispley("grid")}
            class="styleBtn rounded"
            type="button"
          >
            <i class="bi bi-grid-3x3"></i>
          </button>
        </div>
      </div>
      
      <div className={display}>
        {cards
          .filter(
            (card) => card.category === props.wineType || props.wineType === "All"
          )
          .map((card) => (
            <Card key={card.id} data={card} />
          ))}
      </div>
      </div>

  );
}

export default Menu;
