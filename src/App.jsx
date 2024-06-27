import './App.css'
import NavBar from './components/DaysiNav/NavBar/NavBar'
import DaysiNav from './components/DaysiNav/DaysiNav'
import PriceOptions from './components/DaysiNav/PriceOptions/PriceOptions'

function App() {


  return (
    <>

      <NavBar></NavBar>
      <DaysiNav></DaysiNav>

      <h1 className='text-2xl'>Vite + React</h1>

      <PriceOptions></PriceOptions>




    </>
  )
}

export default App
