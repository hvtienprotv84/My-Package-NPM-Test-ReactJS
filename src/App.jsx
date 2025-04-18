import './App.css'
import { getHuynhVinhTien } from 'huynhvinhtien-lib';

function App() {

  return (
    <>
      <div>
      <h1>{getHuynhVinhTien()}</h1>
      </div>
    </>
  )
}

export default App
