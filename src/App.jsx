import './App.css'

import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import useLocoScroll from './locoScroll/locoScroll'

function App() {
  useLocoScroll(true)
  return (
    <>
    <div id='main-container' data-scroll-container>
      <Header />
      <Main />
    </div>
    </>
  )
}

export default App
