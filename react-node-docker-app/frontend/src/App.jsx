import React, { useEffect, useState } from 'react'


export default function App() {

  const [ message, setMessage ] = useState('')

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
