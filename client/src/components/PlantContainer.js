import React from "react";
import PlantCard from "./PlantCard";

function PlantContainer({ plants, onDeletePlant, onUpdatePlant }) {
  console.log(plants)
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
      onUpdatePlant={onUpdatePlant}
     />
    ));

  return <div id="plant-collection">{plantCards}</div>;
}

export default PlantContainer;
