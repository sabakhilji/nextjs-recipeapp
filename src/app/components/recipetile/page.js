'use client'
import React, { useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

/**export default function RecipeTile({ recipe }) {
  
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        
        onClick={() => window.open(recipe["recipe"]["url"])}
      >
       { <img src={recipe["recipe"]["image"]} />
        <p key={uuidv4()}>
        //  {recipe["recipe"]["label"]}
    </p>}
      </div>
    )
  );
}**/
export default function RecipeTile({recipe }) {
  // Check if the image URL is valid
  //const isImageUrlValid = recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null;

  //if (!isImageUrlValid) {
  //  return null; // Or some placeholder content
  //}

  console.log(recipe.url);
  const recipeURL=recipe.url
  const openRecipe = () => {
    window.open(recipeURL, '_blank');
  };
  return (
    <div onClick={openRecipe}>
      <img src={recipe.image} alt={recipe.label} />
      <p>{recipe.label}</p>
    </div>
  );
}