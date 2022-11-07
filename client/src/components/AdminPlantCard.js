import React, {useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom'
//import PlantUpdate from "./PlantUpdate"

function AdminPlantCard({ plant, onDeletePlant, update, setUpdate}) {
  const { id, name, price, number_in_stock, image} = plant;
  const navigate = useNavigate();
  function handleDeleteClick() {
    fetch(`/plants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeletePlant(plant);
      }
    });
  }
  
  /*useEffect(() => {
    setUpdate(update)
  }, [])*/
  
  function handleUpdate(){
    console.log(update)
    setUpdate((update) => !update)
    navigate('/')      
   } 
  console.log(update)
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
      <div className="admin-card">
         <h2>{name}</h2>
         <img src={image} alt={name} className="plant-image" />
         {number_in_stock <= 0 ?(<p className="out-of-stock">Out of stock</p>):(
         <p>{number_in_stock} in stock </p>)}
         <p>GHS{price}</p>
         <button className="like-btn" onClick={handleUpdate}>
          Update
         </button>
         <button className="del-btn" onClick={handleDeleteClick}>
            Delete
         </button>
      </div>
    );
}

export default AdminPlantCard;
