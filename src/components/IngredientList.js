import React from 'react'
import Ingredient from './Ingredient'

function IngredientList({ingredient}) {
    const recipeList = ingredient.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })
    return (
        <div>
            {recipeList}
        </div>
    )
}

export default IngredientList
