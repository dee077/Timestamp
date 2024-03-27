import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import { TEST_API } from './utils/constants';
import { GoogleLogin } from '@react-oauth/google';


function App() {
  const [testData, setTestData] = useState([])

  useEffect( () => {
    // fetchTestData()
  },[])

  const fetchTestData = async () => {
    const data = await fetch(TEST_API)
    const json = await data.json()
    console.log(json)
    setTestData(json)
  }

  return (
    <div className="App">
      <Header/>
      <h1 className='text-center font-bold m-5 text-lg'>{testData[0]?.title} Works!</h1>
    </div>
  );
}

export default App;
