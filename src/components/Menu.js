import { useState } from "react";
import Card from "./Card";
import "./Menu.css";

function Menu() {
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
  
    const [display, setDispley] = useState('grid');
  
    return (
  
      <div className="my-5">
  
        <div className="d-flex justify-content-between mx-5">
  
          <div className="d-flex justify-content-evenly">
  
            <div className="input-group mb-3 mx-3">
              <input type="text" className="form-control rounded-start" aria-label="Text input with dropdown button" placeholder="Category" />
              <button className="filterBtn rounded-end" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-caret-down"></i></button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Red Wine</a></li>
                <li><a className="dropdown-item" href="#">White Wine</a></li>
                <li><a className="dropdown-item" href="#">Rosé Wine</a></li>
                <li><a className="dropdown-item" href="#">Sparkling Wine</a></li>
                <li><a className="dropdown-item" href="#">Dessert Wine</a></li>
              </ul>
            </div>
  
            <div className="input-group mb-3">
              <input type="text" className="form-control rounded-start" aria-label="Text input with dropdown button" placeholder="City" />
              <button className="filterBtn rounded-end" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-caret-down"></i></button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Tel Aviv</a></li>
                <li><a className="dropdown-item" href="#">Jerusalem</a></li>
                <li><a className="dropdown-item" href="#">Haifa</a></li>
                <li><a className="dropdown-item" href="#">Herzelia</a></li>
                <li><a className="dropdown-item" href="#">Netanya</a></li>
              </ul>
            </div>
          </div>
  
          <div class="d-grid gap-2 d-md-block mx-3">
            <button onClick={(e) => setDispley('list')} class="styleBtn rounded mx-3" type="button"><i class="bi bi-text-center"></i></button>
            <button onClick={(e) => setDispley('grid')}  class="styleBtn rounded" type="button"><i class="bi bi-grid-3x3"></i></button>
          </div>
  
        </div>
  
        {/* <div className="d-flex justify-content-evenly"> */}
        <div className={display}>
          {cards.map((card) => (
            // <Card
            //   key={card.id}
            //   wineImg={card.wineImg}
            //   imgTxtUp={card.category}
            //   imgTxtDown={card.imgTxtDown}
            //   name={card.name}
            //   description={card.description}
            //   price={card.price}
            //   stars={card.stars}
            // />
  
            <Card
              key={card.id}
              data={card}
            />
  
          ))}
        </div>
  
      </div>
    );
  }
  
  export default Menu;