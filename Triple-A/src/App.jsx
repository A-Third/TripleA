import { handleFetch } from './utils'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const url = `https://api.artic.edu/api/v1/artworks`


function App() {
  const [artData, setArtData] = useState([])
  const [wrong, setError] = useState()


  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(url);
      if (data) setArtData(data);
      if (error) setError(error);
    };
    doFetch()
  }, [])
  console.log(artData.data)


  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
