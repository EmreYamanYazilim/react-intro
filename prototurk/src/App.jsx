
import './App.css'
import Test from './components/Test.jsx'
import { useState,useRef, forwardRef } from "react";

  //input compnent olarak bu fn yazdık 
  // function Input (props,ref) {
  //   return <input ref={ref} type='text' {...props}/>
  // }

  // Input = forwardRef(Input)

  // yada  alttaki gibi 
  const Input = forwardRef((props,ref) => {
    return <input ref={ref} type='text' {...props}/>

  })

function App() {

  const [show, setShow] = useState(false);



  const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <>
    <button onClick={() => setShow(show => !show)}>
      {show ? 'göster' : 'gizle'}
    </button>
    {show && <Test/>}


    <h1> useRef - useForward</h1>
    <Input ref={inputRef} />
    <button onClick={focusInput}>focusla</button>
    </>
  )
}

export default App
