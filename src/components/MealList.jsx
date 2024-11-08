// import React from 'react';import React from 'react';
// function Title(props) {
//   return <h1>This is my title:Mafia Era</h1>;
// }

// export default Title;

import MealCard from './MealCard';

const meals = [
  { name: "Hummus", description: "A creamy blend of chickpeas, tahini, lemon, and garlic." },
  { name: "Bibimbap", description: "A Korean rice dish with assorted vegetables, meat, and a spicy sauce." },
  { name: "Vietnam Pho", description: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat." },
  { name: "Caesar Salad", description: "A salad with romaine lettuce, croutons, and Caesar dressing." }
];

function MealList() {
  return (
    <div className="card-container">
      {meals.map((meal, index) => (
        <MealCard key={index} name={meal.name} description={meal.description} />
      ))}
    </div>
  );
}

export default MealList;

