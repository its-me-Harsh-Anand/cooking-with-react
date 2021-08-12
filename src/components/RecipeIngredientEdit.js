import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
    return (
        <>
            <input 
                type="text" 
                name="name" 
                value={ingredient.name} 
                className="recipe-edit__input" 
            />
            <input 
                type="text" 
                name="amount" 
                value={ingredient.amount} 
                className="recipe-edit__input" 
            />
            <button className="btn btn--danger">&times;</button>
        </>
    )
}
