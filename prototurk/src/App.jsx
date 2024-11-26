
import './App.css'
import Test from './components/Test.jsx'
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false);

  return (
    <>
    <button onClick={() => setShow(show => !show)}>
      {show ? 'göster' : 'gizle'}
    </button>
    {show && <Test/>}
    </>
  )
}

export default App
