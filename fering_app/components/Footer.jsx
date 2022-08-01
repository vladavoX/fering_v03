import React from 'react'
import Link from 'next/link'

const worktime = [
  {
    name: 'PON-PET',
    text: '07:00 - 16:00'
  },
  {
    name: 'SUBOTA',
    text: '07:00 - 16:00'
  },
  {
    name: 'NEDELJA',
    text: 'neradna'
  }
]

const companyinfo = [
  {
    name: 'Naziv',
    text: 'Pr Fering'
  },
  {
    name: 'Adresa',
    text: 'Patrijarha Rajacica 4, Petrovaradin'
  },
  {
    name: 'PIB',
    text: '110880598'
  },
  {
    name: 'MB',
    text: '65052814'
  },
  {
    name: 'Ziro racun',
    text: '3401142282891'
  },
  {
    name: 'IBAN',
    text: 'RS35340000001142282891'
  }
]

const contact = [
  {
    name: 'Telefon Igor',
    text: '+381 64 555 55 55'
  },
  {
    name: 'Telefon Aleksandar',
    text: '+381 64 146 51 26'
  },
  {
    name: 'Email',
    text: 'fering@gmail.com'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 sm:px-6 lg:px-8 pt-16 pb-6 mx-auto">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:flex lg:justify-between text-gray-100 mb-6'>
          <div>
            <img src="assets/logo/fering_logo.png" alt="Fering logo image" className='h-20 w-auto' />
          </div>
          <div className='text-md'>
            <h2 className='uppercase font-semibold mb-4'>radno vreme</h2>
            {worktime.map((worktime) => (
              <p className='text-sm text-gray-300'><span className='text-md font-medium text-gray-200'>{worktime.name}</span>: {worktime.text}</p>
            ))}
          </div>
          <div className='text-md'>
            <h2 className='uppercase font-semibold mb-4'>podaci firme</h2>
            {companyinfo.map((companyinfo) => (
              <p className='text-sm text-gray-300'><span className='text-md font-medium text-gray-200'>{companyinfo.name}</span>: {companyinfo.text}</p>
            ))}
          </div>
          <div className='text-md'>
            <h2 className='uppercase font-semibold mb-4'>kontakt</h2>
            {contact.map((contact) => (
              <p className='text-sm text-gray-300'><span className='text-md font-medium text-gray-200'>{contact.name}</span>: {contact.text}</p>
            ))}
          </div>
        </div>
        <hr className='my-6 border-gray-700' />
        <div className='lg:flex lg:justify-between text-sm text-gray-500 sm:text-center'>
          <div>
            <span>© 2022 Fering. Sva prava zadržana.
            </span>
          </div>
          <div>
            <span>Sajt kreirao Vladimir Aleksic.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
