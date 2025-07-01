import './Goal.css';

function MadeGoal() {
    return <h3>Goal !</h3>;
  }

  function MissedGoal() {
    return <h3>Goal Missed.</h3>;
  }

  function Goal(props) {
    const isGoal = props.isGoal;
    return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
  }

  function Goals() {
    return (
      <>
        <h2>Goals</h2>
        <Goal isGoal={true} />
        <Goal isGoal={false} />
      </>
    );
  }

  function App(){
   return (
    <div className="goal-card">
      <h1>React Logical Rendering and Ternary Rendering</h1>
      <Goals />
    </div>
  );
  }

  export default App;
 

