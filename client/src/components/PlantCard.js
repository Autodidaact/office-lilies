import React from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const { id, name, price, number_in_stock, image} = plant;

  function handleDeleteClick() {
    fetch(`/plants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePlant(plant);
      }
    });
  }

  /*function handleLikeClick() {
    const updateObj = {
      likes: toy.likes + 1,
    };

    fetch(`/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then((updatedPlant) => onUpdatePlant(updatedPlant));
  }*/

  return(
   <div className="card">
     <h2>{name}</h2>
     <img src={image} alt={name} className="plant-image" />
     {number_in_stock <= 0 ?(<p className="out-of-stock">Out of stock</p>):(
         <p>{number_in_stock} in stock </p>)}
     <p>GHS{price}</p>
   </div>
    ); 
}

export default PlantCard;
