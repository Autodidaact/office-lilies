import React, { useState } from "react";

function PlantUpdate({id, name, price, number_in_stock, image, onPlantUpdate }) {
  const [updatedData, setUpdatedData] = useState({
    name: name,
    price: price,
    number_in_stock: number_in_stock,
    image: image
  });

  function handleChange(event) {
    setUpdatedData({
      ...updatedData,
      [event.target.name]: event.target.value,
    });
  }
  function handleUpdateClick(e) {
  e.preventDefault();
    const updateObj = {
      name: updatedData.name,
      price: updatedData.price,
      number_in_stock: updatedData.number_in_stock,
      image: updatedData.image
    };

    fetch(`/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then((updatedPlant) => onPlantUpdate(updatedPlant));
  }
  

  return (
    <div className="container">
      <form onSubmit={handleUpdateClick} className="forms">
        <h3>Update a plant!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={updatedData.name}
          placeholder="Enter a plant's name..."
          className="input-text"
        />
        <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={updatedData.price}
          placeholder="Enter a plant's price..."
          className="input-text"
        />
        <br />
        <input
          type="number"
          name="number_in_stock"
          onChange={handleChange}
          value={updatedData.number_in_stock}
          placeholder="Enter the number you have in stock..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={updatedData.image}
          placeholder="Enter a plant's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Update Plant"
          className="submit"
        />
      </form>
    </div>
  );
}

export default PlantUpdate;
