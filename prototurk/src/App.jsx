import { useState,useReducer } from "react";

//! reducer birtane fn alır  app içinde  sate dispatch belirlenir fn içinde state ve action geliyor 
function reducerfn (state, action) {
  console.log(state,action);
  
}


function App() {

  //! reducer 1 fn alır  ve 2. parametre olar initialState alır  iniclat state alsında alttaki todos ve todolar  altta onları yorum satırına alacağız  obje olarak alacağız  todos:[],todo:''  acalacağız
  const [state, dispatch] = useReducer(reducerfn, {
    todos:[],
    todo:''
  })

  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState('');
  
  const submitHandle = e => {
    e.preventDefault()
    setTodos([...todos,todo])  //! todos todoların tamamı ve sonra kendi eklediğimiz todoyu virgülden sonra koyduk
    setTodo('')
  }
  
const dispatchOnChange = (e) => {
  dispatch({
    type:'SET_TODO',
    value: e.target.value
  })
}


  return (
    <>
  <h1>Todo App</h1>
  <form onSubmit={submitHandle}>
    {/* <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
    <button type="submit">Ekle</button> */}
        {/* değişiklik olarak burda artık todo yerine satete.todo yazacağız  yukarıda input ve buttonu yorum satırına aldık reducer ile alttaki gibi devam edecek  */}
        <input type="text" value={state.todo} onChange={dispatchOnChange}/>
        <button type="submit">Ekle</button>
  </form>
  {/* <ul>
    {todos.map((todo,index) => (
    <li key={index}>{todo}</li>
    ))}
  </ul> */}
  <ul>
    {state.todos.map((todo,index) => (
    <li key={index}>{todo}</li>
    ))}
  </ul>

    </>
  )
}

export default App
