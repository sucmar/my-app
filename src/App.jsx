import SumWrapper from './components/SumWrapper'
import './App.css'
import { Suspense } from 'react'
const App = () => {


  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SumWrapper />
      </Suspense>
    </div>
  )
}

export default App
