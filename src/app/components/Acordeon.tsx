'use client'
import React, { useState } from 'react'

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const sections = [
    {
      title: 'Descripción del producto',
      content: 'Suaves y de buen tamaño.'
    },
    {
      title: 'Tamaños',
      content: 'Grande, mediano y chico.'
    },
    {
      title: 'Tiempo en que hacemos la entrega del producto',
      content: 'DE 3 a 5 dias.'
    },
    {
      title: 'Opiniones de clientes',
      content: '"A mi novia le encanto" ⭐⭐⭐⭐⭐'
    },
    
  ]

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {sections.map((section, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection(index)}
            className="w-full bg-purple-600 text-white px-4 py-2 font-bold text-left"
          >
            {section.title}
          </button>
          {openIndex === index && (
            <div className="bg-purple-100 text-gray-800 p-4">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion