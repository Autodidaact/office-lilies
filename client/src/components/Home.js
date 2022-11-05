import React, { useEffect, useState } from "react";
import PlantForm from "./PlantForm";
import PlantContainer from "./PlantContainer";
import Login from "./Login"


function Home({ user }) {


  const [showForm, setShowForm] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleDeletePlant(plantToDelete) {
    const updatedPlants = plants.filter((plant) => plant.id !== plantToDelete.id);
    setPlants(updatedPlants);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updatedPlants);
  }

  if (user && user.has_admin_privileges === true) {
    return(
      <>
        <h1>Welcome, {user.name}!</h1>
        {showForm ? <PlantForm onAddPlant={handleAddPlant} /> : null}
        <div className="buttonContainer">
	   <button onClick={handleClick}>Add a Plant</button>
        </div>
        <PlantContainer
	  plants={plants}
	  onDeletePlant={handleDeletePlant}
	  onUpdatePlant={handleUpdatePlant}
        />
      </>
     )
     }else if(user && user.has_admin_privileges === false) {
       return(
      <>
        <h1>Welcome, {user.name}!</h1>
        <PlantContainer
	  plants={plants}
	  onDeletePlant={handleDeletePlant}
	  onUpdatePlant={handleUpdatePlant}
        />
      </>
     ) 
     }else{
      return <h1>Please Login or Sign Up </h1>
    }
}
export default Home;
