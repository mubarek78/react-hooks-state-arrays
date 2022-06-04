import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);


  // create a new array that incloud food list 
  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    // console.log(newFood);
    setFoods(newFoodArray);
  }

// to delete the food when press on <li>  
  function handleLiClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id) // we will use .filtar method 
    setFoods(newFoodArray)
  }

  function handleUpdateList(id){
    
    // update food list 
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const foodList = foods.map((food) => {
    <li key={food.id} onClick={() =>  handleLiClick(food.id)}>
      {food.name} |  Heat:{food.heatLevel} |  Cuisine: {food.cuisine}
    </li>
  })

  return (
    <div>
      <button onClick={handleAddFood}> Add new food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;