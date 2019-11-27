import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
    // Данные, массив объектов приложения Recipe
    const data = [
        {
            "name": "Baked Salmon",
            "ingredients": [
                { "name": "Salmon", "amount": 1, "measurement": "l lb" },
                { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
                { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
                { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
                { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
                { "name": "Garlic", "amount": 3, "measurement": "cloves" }
            ],
            "steps": [
                "Preheat the oven to 350 degrees.",
                "Spread the olive oil around a glass baking dish.",
                "Add the salmon, garlic, and pine nuts to the dish.",
                "Bake for 15 minutes.",
                "Add the yellow squash and put back in the oven for 30 mins.",
                "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
            ]
        },
        {
            "name": "Fish Tacos",
            "ingredients": [
                { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
                { "name": "Cheese", "amount": 1, "measurement": "cup" },
                { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
                { "name": "Tomatoes", "amount": 2, "measurement": "large"},
                { "name": "Tortillas", "amount": 3, "measurement": "med" }
            ],
            "steps": [
                "Cook the fish on the grill until hot.",
                "Place the fish on the 3 tortillas.",
                "Top them with lettuce, tomatoes, and cheese."
            ]
        }
    ];
    // Функциональный компонент, не имеющий состояния, предназначенный
    // для отдельно взятого рецепта приложения Recipe
    const Recipe = ({name, ingredients, steps}) => 
        <section id={name}>
            <h1>{name}</h1>
            <ul className='ingredients'>
                {ingredients.map((ingredient, i) => 
                    <li key={i}>{ingredient.name}</li>
                )}
            </ul>
            <section className='instructions'>
                <h2>Cooking Instructions</h2>
                {steps.map((step, i) =>
                    <li key={i}>{step}</li>
                )}
            </section>
        </section>
    // Функциональный компонент, не имеющий состояния,
    // предназначенный для меню из рецептов
    const Menu = (props) => 
        <article>
            <div className='menu'>
                <header>
                    <h1>
                        {props.title}
                    </h1>
                </header>
                <div className='recipes'>
                    {props.recipes.map((recipe, i) => 
                        <Recipe key = {i} {...recipe} />
                    )}
                </div>
            </div>
            
        </article>


    // Вызов ReactDOM.render для отображения Menu в текущей DOM-модели
   ReactDOM.render(<Menu recipes={data} title="Delicious Recipes" />, document.getElementById("root"))
   

