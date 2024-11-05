function MealCard({ name, description }) {
  const images = {
    Hummus: "/assets/hummus.jpg",
    Bibimbap: "/assets/bibimbap.jpg",
    "Vietnam Pho": "/assets/pho.jpg",
    "Caesar Salad": "/assets/caesar_salad.jpg"
  };

  return (
    <div className="meal-card">
      <img src={images[name]} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default MealCard;

