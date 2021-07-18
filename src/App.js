import React, {useState, useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  
  const APP_ID = 'aef66a74';
  const APP_KEY = '3a3fe067527bc8fee6ca2a2bc5e17340';

  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    getRecipes()
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
