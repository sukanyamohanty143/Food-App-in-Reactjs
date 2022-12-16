import './App.css';
import React, { useEffect, useState } from 'react';
// import {Routes,Route,Link} from 'react-router-dom'
function App() {
  const [allFoods, setAllFoods] = useState([])
  const [search, setSearch]=useState("")
  const [cartFood, setCartFood] = useState([])

  const getData = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    const allFoods = await response.json()
    setAllFoods(allFoods.meals)
    console.log(allFoods)
  }
  useEffect(() => {
    getData()
  }, []);

  const addToCart = (item) => {
    let data = {
      "mealName": item.strMeal,
      "price": 50
    }
    console.log(data)
  }
  return (
    <div>
      <div className='navbar'>
        <div className='icon'>
          <img src='https://www.themealdb.com/images/logo-small.png'></img>
          <button className='home'>Home</button>
          <button className='invoice' >Invoice</button>
        </div>
      </div>
      <div className='body'>
        <h1>Welcome to TheMealDB</h1>
        <p className='about'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.<br />
          We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
        <p className='about1'>Click to Support $2 per month (cancel anytime)<br />Currently 50 supporters</p>
        <hr />
        <input className='mealinput' type="text" placeholder="Search for Meal" value={search} onChange={(vlu)=>{
          setSearch(vlu.target.value)
        }} /><br/>
        <p className='detilas'>Total Meals: 285</p><p className='detilas'>Total Ingredients: 574</p>
        <hr />
        <p>Latest Meals</p>
      </div>
      <div className='mainbody'>
        {
          allFoods.map((item, index) => {
            return (
              <div className='displayfood'>
                <img className='img' src={item.strMealThumb} /><br /><p className='category'>{item.strCategory}</p>
                <p className='mealName'>{item.strMeal}</p>
                <button className='mealPrice'>₹50</button>
                <button className='mealPrice' onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
