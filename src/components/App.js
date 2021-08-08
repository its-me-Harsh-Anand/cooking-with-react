import React from "react";
import RecipeList from "./RecipeList";
import "../css/app.css"

function App (){
  return (
  <RecipeList recipes = {sampleRecipe}/>
  )
}

const sampleRecipe = [
  {
      id: 1,
      name: "Plain Rice",
      cookTime: "1:45",
      servings: 3,
      instructions: "1. Put water into cooker \n 2. Put cooker inside oven \n 3. Eat Rice",
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
      instructions: "1. Put momos into cooker \n 2. Put cooker over gas \n 3. Eat and enjoy momos",
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
