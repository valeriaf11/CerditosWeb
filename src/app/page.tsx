import React from 'react'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Alert from './components/Alert'
import Table from './components/Table'
import Imagen from './components/Imagen'
import Accordion from './components/Acordeon'

const page = () => {
  return (
<>
<Navbar/>
<Button/>
<Card/>
<Alert/>
<Table/>
<Imagen/>
<Accordion/>
</>
  )
}
export default page