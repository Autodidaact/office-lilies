import React, { useEffect, useState } from "react";
import PlantForm from "./PlantForm";
import PlantContainer from "./PlantContainer";
import Login from "./Login"
import PlantUpdate from "./PlantUpdate"


function Home({ user }) {


  const [showForm, setShowForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  
 /*function onHandleUpdate(){
    setUpdate((update) => !update); 
  }*/
  
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
  
  const plantUp = plants.map((plant) => {
    return <PlantUpdate
     key={plant.id} 
     id={plant.id} 
     name={plant.name} 
     price={plant.price}
     number_in_stock={plant.number_in_stock}
     image={plant.image}
     onPlantUpdate={handleUpdatePlant}
    />
  })

  if (user && user.has_admin_privileges === true) {
    return(
      <>
        
        <h1>Welcome, {user.name}!</h1>
        {!update?
          <>
          {showForm ? <PlantForm onAddPlant={handleAddPlant} /> : null}
          <div className="buttonContainer">
	     <button onClick={handleClick}>Add a Plant</button>
          </div>
         </>:
         <>
          {showForm ? plantUp : null}
          <div className="buttonContainer">
	     <button onClick={handleClick}>Update a Plant</button>
          </div>
         </>
        }
        
        <PlantContainer
	  plants={plants}
	  onDeletePlant={handleDeletePlant}
	  user={user}
	  update={update}
	  setUpdate={setUpdate}
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
	  user={user}
        />
      </>
     ) 
     }else{
      return <h1>Please Login or Sign Up </h1>
    }
}
export default Home;
