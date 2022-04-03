import React, { useEffect, useState } from 'react'
import './style.css'

export default function App() {

  const [ name, setName ] = useState('')

  useEffect(() => {
    fetch(
      'https://cloud-worker-demo.solojacker-worker.workers.dev/',
      {
        method: 'GET'
      }
    )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data)
    })
  })

  return (
    <div>
      <h1>cloud demo</h1>
      <p>resived data: {name}</p>
    </div>
  )
}
