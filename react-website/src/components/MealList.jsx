// import React from 'react';import React from 'react';
// function Title(props) {
//   return <h1>This is my title:Mafia Era</h1>;
// }

// export default Title;

import MealCard from './MealCard';

const meals = [
  { name: "Hummus", description: "A creamy blend of chickpeas, tahini, lemon, and garlic.", image: '/src/assets/mealImages/hummus.jpg' },
  { name: "Bibimbap", description: "A Korean rice dish with assorted vegetables, meat, and a spicy sauce.", image: '/src/assets/mealImages/bibimbap.jpg' },
  { name: "Vietnam Pho", description: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat.", image: '/src/assets/mealImages/pho.jpg' },
  { name: "Caesar Salad", description: "A salad with romaine lettuce, croutons, and Caesar dressing.", image: '/src/assets/mealImages/caesar_salad.jpg' }
];

function MealList() {
  return (
    <div className="card-container">
      {meals.map((meal, index) => (
        <MealCard key={index} name={meal.name} description={meal.description} image={meal.image} />
      ))}
    </div>
  );
}

export default MealList;