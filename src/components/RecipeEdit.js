import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

function RecipeEdit({ selectedRecipe }) {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__delete-button-container">
                <button className="recipe-edit__delete-button">&times;</button>
            </div>

            <div className="recipe-edit__grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={selectedRecipe.name} 
                    className="recipe-edit__input" 
                />
                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input 
                    type="text" 
                    name="cookTime" 
                    id="cookTime" 
                    value={selectedRecipe.cookTime} 
                    className="recipe-edit__input" 
                />
                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input 
                    type="number" min="1" 
                    name="servings" 
                    id="servings" 
                    value={selectedRecipe.servings} 
                    className="recipe-edit__input" 
                />
                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea 
                    name="instructions" 
                    id="instructions" 
                    value={selectedRecipe.instructions} 
                    className="recipe-edit__input recipe-edit__instructions" 
                />
            </div>

            <br />
            
            <label className="recipe-edit__label">Ingredients</label>

            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {selectedRecipe.ingredients.map(ingredient =>{
                    return <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient}/>
                })}
            </div>

            <div className="recipe-edit__add-ingredient-button-container">
                <button className="btn btn--primary recipe-edit__add-ingredient-button">Add Ingredient</button>
            </div>
        </div>
    )
}

export default RecipeEdit
