import React, { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    price: null,
    number_in_stock: null,
    image: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newPlant = {
      ...formData
    };

    fetch("/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((newPlant) => {
        setFormData({
          name: "",
          price: null,
          number_in_stocK: null,
          image: "",
        });
        onAddPlant(newPlant);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-plant-form">
        <h3>Create a plant!</h3>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a plant's name..."
          className="input-text"
        />
        <br />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={formData.price}
          placeholder="Enter a plant's price..."
          className="input-text"
        />
        <br />
        <input
          type="number"
          name="number_in_stock"
          onChange={handleChange}
          value={formData.number_in_stock}
          placeholder="Enter the number you have in stock..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formData.image}
          placeholder="Enter a plant's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Plant"
          className="submit"
        />
      </form>
    </div>
  );
}

export default PlantForm;
