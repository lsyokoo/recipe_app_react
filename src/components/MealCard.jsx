// import React from 'react';import React from 'react';

// function Welcome(props) {
//     console.log(props.age)
//   return <>
//             <h1>{props.greeting}, {props.name}</h1>

//         </>
// }

// export default Welcome;

import './MealCard.css';

function MealCard({ name, description, image }) {
  return (
    <div className="meal-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MealCard;
