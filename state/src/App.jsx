
import { useState } from 'react'
import './App.css'

function App() {

  const handleChange = () => {
    setFirstName("10x yazılım react")
  }
  const arttir = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if (count>0) {
      setCount(count-1)
    }
  }

  const [firsName, setFirstName] = useState('emre');
  const [Names, setNames] = useState(["ali", "mehmet", "ahmet"]);
  const [userInfo, setUserInfo] = useState({ username: "Emre", passowrd: "123123" })
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{firsName}</div>
      <button onClick={() => { setFirstName("yaman") }}>ismi değiştir</button>
      <button onClick={handleChange}>ismi değiştir</button>

      <div>
        {Names.map((names, index) => (
          <div key={index}>{names}</div>
        ))}
      </div>
      <div>Kullanıcı adı:  {userInfo.username} | kullanıcı şifre {userInfo.passowrd}</div>

      <div>
        {show ? <div>Kullanıcı adı:  {userInfo.username} | kullanıcı şifre {userInfo.passowrd}</div>
          : <p>gösterme</p>}
      </div>
      <br></br>

      <div>
        {count}
        <br/>
        <button onClick={arttir}>Attır</button>
        <button onClick={azalt}>Azalt</button>
      </div>
    </>
  )
}

export default App
