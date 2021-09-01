import './App.css'
import { useState } from "react"
import { AllFruits } from './components/Allfruits'

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ])
  
  const totalPrice = fruits.reduce((acc, item) =>{ return acc + item.price}, 0)

  const filterRedFruits = () => {
    setFruits(
    fruits.filter((item) => item.color === "red")
  )}

  return (
    <div className="App">
      <header className="App-header">
        <h3>Preço total = {totalPrice}</h3>
        <AllFruits fruits = {fruits}/>
        <button onClick={filterRedFruits}> Mostrar frutas vermelhas </button>
      </header>
    </div>
  );
}

export default App;
