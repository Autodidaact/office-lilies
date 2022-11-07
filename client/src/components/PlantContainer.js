import React from "react";
import PlantCard from "./PlantCard";
import AdminPlantCard from "./AdminPlantCard";

function PlantContainer({ plants, onDeletePlant, update, setUpdate, user}) {
  console.log(plants)
  const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
     />
    ))
    
  const adminPlantCards = plants.map((plant) => (
    <AdminPlantCard
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
      update={update}
      setUpdate={setUpdate}
     />
    ))
  if (user.has_admin_privileges === true){
    return <div id="plant-collection">{adminPlantCards}</div>
  }else{
  
    return <div id="plant-collection">{plantCards}</div>
  }  
  
}

export default PlantContainer;


{/*const plantCards = plants.map((plant) => (
    <PlantCard
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
      onUpdatePlant={onUpdatePlant}
     />
    ));*/}
