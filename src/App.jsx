import './App.css'
// import NavBar from './components/DaysiNav/NavBar/NavBar'
import DaysiNav from './components/DaysiNav/DaysiNav'
import PriceOptions from './components/DaysiNav/PriceOptions/PriceOptions'
import LineChart from './LineChart/LineChart'
import Phones from './Phones/Phones'

function App() {


  return (
    <>

      {/* <NavBar></NavBar> */}
      <DaysiNav></DaysiNav>

      {/* <h1 className='text-2xl'>Vite + React</h1> */}

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>




    </>
  )
}

export default App
