import React from "react";
import "./cardComponent.css";

function CardComponent(props) {
  console.log(props);
  return (
    <>
      <div className="card__container">
        <h1 className="card-name-tittle">{props.data.name}</h1>
        <p className="card-description">height: {props.data.height}</p>
        <p className="card-description">mass: {props.data.mass}</p>
        <p className="card-description">hair color: {props.data.hair_color}</p>
        <p className="card-description">skin color: {props.data.skin_color}</p>
        <p className="card-description">
          year of birth: {props.data.birth_year}
        </p>
        <p className="card-description">gender: {props.data.gender}</p>
      </div>
    </>
  );
}

export default CardComponent;
