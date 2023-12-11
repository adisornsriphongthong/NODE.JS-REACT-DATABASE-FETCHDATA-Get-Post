import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [text, setText] = useState([]);

  const myButton = async () => {
    try {
      const response = await fetch('http://localhost:3000/api3', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(response.ok) {
        const result = await response.json();
        setText(result)
      }
    } catch (error) {
      console.log('error')
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Data: 10 }),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Optionally, you can fetch data again after submitting
        fetchData();
      } else {
        console.error('Failed to submit data');
      }

    } catch (error) {
      console.error('Error during submission:', error);
    }
    
  };


  useEffect(() => {
    
  }, [])

  return (
    <div>
      <label htmlFor="">{JSON.stringify(text)}</label>
       <form onSubmit={handleSubmit}>
        <button onClick={myButton} type='submit'>submit</button>
       </form>
    </div>
  )
}

export default App
