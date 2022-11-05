import React from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  console.log(plant)
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

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="plant-image" />
      <p>{number_in_stock} in stock </p>
      <p>GHS{price}</p>
      {/*<button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>*/}
    </div>
  );
}

export default PlantCard;
