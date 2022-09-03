import { useState } from "react";
import Card from "./Card";
import "./Menu.css";

function Menu(props) {
  const [display, setDispley] = useState("grid");

  function optionClickCng(optinoNewWineType) {
    // alert("menu:" + setWineType);
    props.cngChdToPerents(optinoNewWineType, optinoNewWineType);
  }

  return (
    <div id="control-conteiner" className="my-5 container">
      <div className="d-flex justify-content-between mx-5">

        <div id="cat-dropdown" className="d-flex justify-content-evenly">
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

        <div id="cards-view" className="d-grid gap-2 d-md-block mx-3">
          <button
            onClick={(e) => setDispley("list")}
            className="styleBtn rounded mx-2"
            type="button"
          >
            <i className="bi bi-text-center"></i>
          </button>
          <button
            onClick={(e) => setDispley("grid")}
            className="styleBtn rounded"
            type="button"
          >
            <i className="bi bi-grid-3x3"></i>
          </button>
        </div>
      </div>
      
      <div className={display}>
        {props.cardsData
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
