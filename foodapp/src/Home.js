import Navbar from './component/Navbar'
import Bodytext from './component/Bodytext'
export default function Mainbody() {
    return (
        <div className='mainbody'>
            {
                allFoods.map((item, index) => {
                    return (
                        <div className='displayfood'>
                            <img className='img' src={item.strMealThumb} /><br /><p className='category'>{item.strCategory}</p>
                            <p className='mealName'>{item.strMeal}</p>
                            <button className='mealPrice'>₹50</button>
                            <button className='mealPrice'>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}