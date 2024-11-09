import { useState, useEffect } from 'react'

import './App.css'

function App() {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  //1. örnek
  useEffect(() => {
    console.log("her zaman çalışır");
  })

  //2. örnek
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır ");

  }, [])

  //3. örnek
  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname state değeri değiştinde çalışır ");

  }, [firstName])

  return (
    <>
      <div>
        <button onClick={() => setFirstName("Emre yaman Yazılım")}>
          first değiştir
        </button>
      </div>
      <div>
        <button onClick={() => setLastName("10x hızında öğrenmeye kod yazmaya devam ")}>
          last değiştir
        </button>
      </div>
    </>
  )
}

export default App
