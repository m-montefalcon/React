import './App.css';

function App() {
  const currDate = new Date();
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <h2>Date : {currDate.toDateString()}</h2>
      <h2>Time : {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
