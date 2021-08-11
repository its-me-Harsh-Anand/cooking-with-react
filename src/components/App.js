import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css"
import { v4 as uuidv4 } from 'uuid';

function App (){
  const [recipe, setRecipe]= useState(sampleRecipe)
  
  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: "Name",
      cookTime: "1:00",
      servings: 1,
      instructions: "instructions",
      ingredients: [
        {
          id: uuidv4(),
          name: "ing. name",
          amount: "1 kg"
        }
      ]
    }
    // recipe.push(newRecipe) 
    //this above will not work as this will only push but not re-render our page but setRecipe will push as well as re-render our page
    setRecipe([...recipe, newRecipe])
    //In above line, ...recipe tells to take all the recipe present in our recipe array and add a newRecipe to make a brand new array
  }
  function handleRecipeDelete(id){
    setRecipe(recipe.filter(recipe=> recipe.id !== id))   
  }
  console.log("rendered recipe")
  return (
  <RecipeList recipes = {recipe} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete={handleRecipeDelete}/>
  )
}


const sampleRecipe = [
  {
      id: 1,
      name: "Plain Rice",
      cookTime: "1:45",
      servings: 3,
      instructions: "1. Put water into cooker\n2. Put cooker inside oven\n3. Eat Rice",
      ingredients: [
        {
          id: 1,
          name: "Rice",
          amount: "2 kg"
        },
        {
          id: 2,
          name: "Water",
          amount: "1 Litre"
        }
      ]
  },
  {
      id: 2,
      name: "Veg Momos",
      cookTime: "5:00",
      servings: 5,
      instructions: "1. Put momos into cooker\n2. Put cooker over gas\n3. Eat and enjoy momos",
      ingredients: [
        {
          id: 1,
          name: "Rice Floor",
          amount: "0.5 kg"
        },
        {
          id: 2,
          name: "Chutney",
          amount: "250 gm"
        }
      ]
  }
]

export default App;
