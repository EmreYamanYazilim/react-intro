import { useState, useMemo } from "react";


function App() {


  const genders = ['erkek', 'kadın']; // array olarak tanımlama 
  // obje olarak tanımlamak istersek alltaki gibi 
  const gendersObje =  [
    {key:"1", value:"Erkek"},
    {key:"2", value:"Kadın"}
  ]
  const [name, setName] = useState('emre');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState(2);

  // const selectedGender = useMemo(() => {return genders[gender]}, [gender])
  const selectedGender = genders[gender];
  const selectedGenderObje = gendersObje.find(g => g.key == gender);

  return (
    <>
      <button onClick={() => setName('EmreYamanYazılım10x React <3')}>Değiştir</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      {name}
      <br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      {description}


      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value={''}>Seçin</option>
        {genders.map((gender, index) => (
          <option value={index} key={index}>{gender}</option>
        ))}

      </select>
      <br />
      {selectedGender}
      <br />
      <br />


      {/* obje olarak option  */}
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value={''}>Seçiniz</option>
        {gendersObje.map((gender) => (
        <option value={gender.key} key={gender.key}>{gender.value}</option>
        ))}
      </select>
      <br />
      <pre>
        {JSON.stringify(selectedGenderObje,null,2)}
      </pre>

    </>
  )
}

export default App
