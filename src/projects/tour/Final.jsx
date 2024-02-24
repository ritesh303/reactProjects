import React, { useState } from "react";
import "./tour.css";

const Final = ({ id, image, info, name, price ,removeTour}) => {
    const [readmore,setReadmore]=useState(false)
    const handleClick=()=>{
        setReadmore(!readmore)
    }

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
      <div className="tour-info">
      <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
        <p>{readmore?info:`${info.substring(0,200)}...`}
        <button onClick={handleClick}>{readmore ? 'show less':'read more'}</button>
        </p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>Not interseted</button>
      </footer>
    </article>
  );
};

export default Final;
