import { useEffect,useState  } from "react";

const Test = () => {

  const [count, setCount] = useState(0);
  const [post, setPost] = useState(false);

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
    fetch(`https://jsonplaceholder.typicode.com/post/${count}`)
    
      .then(response => response.json())
    
      .then(data => setPost(data))
    
      .catch(error => console.log(error));
    
  }, [count]);

  return (
    <>

    <h3>{count}</h3>
    {post && JSON.stringify(post)}
      <button onClick={() => setCount(count => count+1)}>Arttırma</button>
        <div>Test</div>
    </>

  )
}

export default Test