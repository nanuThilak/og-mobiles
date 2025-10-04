import React from "react";
import { Link } from "react-router-dom";
const Card = ({ img, link, price, spces, name, dis, pro }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-sm shadow-amber-100">
      <Link to={link}>
        <figure>
          <img className="w-full h-[350px] rounded-xl" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}

            <div className="badge badge-secondary">BUY</div>
          </h2>
          <p>
            {spces}
            {pro}
          </p>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{dis}</div>
            <div className="badge badge-outline">{price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
