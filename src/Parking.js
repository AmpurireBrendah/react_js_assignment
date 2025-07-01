import './Parking.css';

function Parking() {
    const spots = ['A1', 'B2', 'C3'];
    const hasSpots = spots.length > 0;

    return (
      <>
        <h2>Parking Spots</h2>
        {hasSpots && (
          <ul>
            {spots.map((spot, index) => (
              <li key={index}>{spot}</li>
            ))}
          </ul>
        )}
        {!hasSpots && <p>No parking spots available.</p>}
      </>
    );
  }

  function App(){
   return (
    <div className="parking-card">
      <h1>React Logical Rendering and Ternary Rendering</h1>
      <Parking />
    </div>
  );
  }

  export default App;
