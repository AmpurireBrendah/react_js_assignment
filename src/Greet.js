import './Greet.css';

function Greet({ name, age, school, address }) {
  console.log(name, "name");
  console.log(age, "age");
  console.log(school, "school");
  console.log(address, "address");

  return (
    <div className="greet-card">
      <h1>I am {name}</h1>
      <p>Aged {age}</p>
      <p>A student at {school}</p>
      <p>Located at {address}.</p>
    </div>
  );
}

export default Greet;
















