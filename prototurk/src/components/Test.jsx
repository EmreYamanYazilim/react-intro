import { useEffect,useState  } from "react";

const Test = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('component ilik yüklendiğinde calsır');
    return () => {
      console.log('component kaldır ');

    }
  }, [])

  useEffect(() => {
    console.log('component render olduğunda sürekli çalışır');

  })

  useEffect(() => {
    console.log('Count değeri değişti ' ,count);
    
  }, [count]);

  return (
    <>
    <h3>{count}</h3>
      <button onClick={() => setCount(count => count+1)}>Arttırma</button>
        <div>Test</div>
    </>

  )
}

export default Test