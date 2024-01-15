'use client'
import Axios from "axios";
import { useState} from "react";
import RecipeTile from "../recipetile/page";
import { v4 as uuidv4 } from "uuid";

export default function Search() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const YOUR_APP_ID = `a5e8aba0`;
  const YOUR_APP_KEY = "cedeb65ed04a0340caf4f888f1abd0ef";;
  //const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const url=`https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
  const getRecipeInfo = async () => {
    try {
      var result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };
  
  
  return (<div>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="enter ingredient"
        autoComplete="Off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
      />
      <input type="submit" value="Search" />
    </form>

    
    {recipes.length > 0 &&
  recipes.map((item) => (
   

    <RecipeTile key={uuidv4()} recipe={item.recipe} />
  ))
}
    
  </div>

    
  )
}