import { useState } from "react";


export default function Drink(){
    const [drinkType, setDrinkType] = useState("red");
    const [drinkList, setDrinkList] = useState();

    const loadDrinks = async (name) => {
        setDrinkType(name);
        getDrink(name);
    }
    
    const getDrink = async (drinkType) => {
        const res = await fetch("https://api.sampleapis.com/wines/" + drinkType);
        const data = await res.json();
        setDrinkList(data);
    }

    return(
        <section>
            <nav>
                <button onClick={() => loadDrinks('reds')}>Red</button>
                <button onClick={() => loadDrinks('whites')}>White</button>
                <button onClick={() => loadDrinks('sparkling')}>Sparkling</button>
                <button onClick={() => loadDrinks('rose')}>Rose</button>
                <button onClick={() => loadDrinks('dessert')}>Dessert</button>
                <button onClick={() => loadDrinks('port')}>Port</button>
            </nav>
            <div className="drink-container">
                <h2>{drinkType}</h2>
                <div className="drink-list">
                    {
                        !drinkList
                        ? <p>Click a button to load drinks.</p>
                        : drinkList.map( (drink) => {
                            return (
                                <div key = {drink.id} className="hover-effect">
                                    <img src={drink.image}></img>
                                    <h3>{drink.wine}</h3>
                                    <p>Location: {drink.location}</p>
                                    <p>Rating: {drink.rating.average}</p>
                                    <p>Reviews: {drink.rating.reviews}</p>
                                    <p>Winery: {drink.winery}</p>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}