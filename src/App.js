import './App.css';
import Greet from './Greet';
import Goal from './Goal';
import Garage from './Garage';
import Packing from './Parking';
import Form from './Form';

function App() {
  const myName = "Ampurire"
  const school= "WITU"
  const address = "Bukoto"

  const secondName = "Aine"
  const school1= "MUBS"
  const address1 = "Nakawa"

  const thirdName ="Mwesigye"
  const school2= "Kyambogo"
  const address2 = "Nakawa"

  return (
  <div className='App'>
  <h1>Hello, welcome.</h1>
  <Greet name={myName} age={24} school={school} address={address} />
  <Greet name={secondName} age={22} school={school1} address={address1} />
  <Greet name={thirdName} age={29} school={school2} address={address2} />
  <Garage/>;
<Goal/>;
<Packing/>;
<Form/>
    
  </div>
  );
}


export default App;
