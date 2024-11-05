// import React from 'react';import React from 'react';

// function Welcome(props) {
//     console.log(props.age)
//   return <>
//             <h1>{props.greeting}, {props.name}</h1>
//         </>
// }

// export default Welcome;
import './MealCard.css';

// Import images with the correct relative path
import hummusImage from '../assets/hummus.jpg';
import bibimbapImage from '../assets/bibimbap.jpg';
import phoImage from '../assets/pho.jpg';
import caesarSaladImage from '../assets/caesar_salad.jpg';

function MealCard({ name, description }) {
  // Map names to images
  const images = {
    Hummus: hummusImage,
    Bibimbap: bibimbapImage,
    Pho: phoImage,
    "Caesar Salad": caesarSaladImage
  };

  return (
    <div className="meal-card">
      {/* Use name to access the correct image */}
      <img src={images[name]} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MealCard;
