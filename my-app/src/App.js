
import './App.css';
import {useState} from 'react'

const numbers49= [];
for ( let i = 1; i < 50; i++) numbers49.push(i)

function App() {


  const[sixnumbers, setSixnumbers] = useState(new Array(6).fill(0))
  const [lucky, setlucky] = useState(0)

  const handleGenerate = () => {

    const oldNumbers = []
  
    for (let i = 0; i<6; i++) {
      const  randomIndex= Math.floor(Math.random() * numbers49.length)
      const randomNumber = numbers49[randomIndex]
      oldNumbers.push(randomNumber)
      numbers49.splice(randomIndex, 1)

    }

    // oldNumbers[2] = 4
    setSixnumbers(oldNumbers)
    setlucky(Math.ceil(Math.random() * 10))

  }

  const handleReset = () => {
    setSixnumbers([]);
    setlucky([]);
  }

  return (
    <div className="App">
      <h1>Lotto 6/49</h1>
      <p>Generating Lucky Numbers</p>
     <div className='all-numbers'>
       <div className='six-numbers'>
        {sixnumbers.map((item, idx) => <input key={idx} value ={item} disabled/>)}
         {/* <input disabled />
         <input disabled />
         <input disabled />
         <input disabled />
         <input disabled />
         <input disabled /> */}
         <div className='lucky'><input value ={lucky}disabled /></div>
       </div>
     </div>
     <button className='reset' onClick = {handleReset}>Reset</button>
     <button className='generate' onClick = {handleGenerate}>Show me lucky numbers</button>
  
    </div>
  );
}

export default App;
