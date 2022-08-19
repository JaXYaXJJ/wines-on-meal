function Card(props) {
    function handleClick(wineName) {
      console.log(`You selected: ${wineName}`);
    }
  
    // {
    //   id: 1,
    //   wineImg:
    //     "https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg",
    //   category: "Red Wine",
    //   imgTxtDown: "Burgundy",
    //   name: "Pinot Noir",
    //   description:
    //     "red-wine grape variety of the species Vitis vinifera, the name may also refer to wines created predominantly from pinot noir grapes",
    //   price: "$" + 89.99,
    //   stars: 5,
    // },
  
    const data = props.data;
    
    const handling = data.category;
    
    return (
      <div className="card">
        <div class="txt-container position-relative">
          <p class="position-absolute top-0 end-0 my-3">{data.category}</p>
          <p class="position-absolute bottom-0">{data.imgTxtDown}</p>
          <img src={data.wineImg} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description}</p>
          <div class="d-flex justify-content-between">
            <p className="card-text">{data.price}</p>
            <p className="card-text">
              Raiting: {data.stars} <i class="bi bi-star"></i>
            </p>
          </div>
  
          {/* <a href="#" className="orderBtn">
            Order Now
          </a> */}
  
          <button onClick={() => handleClick(data.name)} className="orderBtn">
            Order Now
          </button>
        </div>
      </div>
    );
  }
  
  export default Card;