'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Button from './components/Button'
import Card from './components/Card'
import Imagen from './components/Imagen'
import Table from './components/Table'
import Acordeon from './components/Acordeon'



const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center gap-8 px-4 py-8">
        <Button />
        <Card />
        <Alert />
        <Table />
        <Imagen />
        <Acordeon />
      </main>
    </div>
  )
}

export default Home
