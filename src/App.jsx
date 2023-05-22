import './App.css'

import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Rutinas } from './components/rutinas/Rutinas'
import useLocoScroll from './locoScroll/locoScroll'

function App() {
  useLocoScroll(true)
  return (
    <>
    <div id='main-container' data-scroll-container>
      <Header />
      <Main />
      <Rutinas />
    </div>
    </>
  )
}

export default App
