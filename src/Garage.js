import React from 'react';
import './Garage.css';


function Car({ brand }) {
  return <li>{brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.length > 0 ? (
          cars.map((car) => <Car key={car.id} brand={car.brand} />)
        ) : (
          <p>No cars in the garage</p>
        )}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <div className='Garage-card'>
      <h1>Ternary and Logical Operators</h1>
      <Garage />
    </div>
  );
}


