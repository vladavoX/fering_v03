import React from 'react'

import { BsTelephone, BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const contact = [
  {
    name: 'Telefon Igor',
    user: 'Igor',
    text: '+381 64 555 55 55',
    icon: BsTelephone
  },
  {
    name: 'Telefon Aleksandar',
    user: 'Aleksandar',
    text: '+381 64 146 51 26',
    icon: BsTelephoneFill
  },
  {
    name: 'Email',
    text: 'fering@email.com',
    icon: AiOutlineMail
  },
  {
    name: 'Adresa',
    text: 'Patrijarha Rajacica 4, Petrovaradin',
    icon: HiOutlineLocationMarker
  }
]

export default function Contact() {
  return (
    <div id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex py-16 sm:py-24 lg:py-32'>
        <div className='flex-1 bg-indigo-600 py-10 px-10 text-white'>
          <div>
            <h2 className='text-2xl tracking-tight mb-4 font-semibold'>Kontakt informacije</h2>
            <p className='text-l'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cum reiciendis rerum nesciunt totam eum, fugiat soluta perferendis numquam voluptatum,
              quae maxime nihil at velit.</p>
          </div>
          {contact.map((contact) => (
            <div key={contact.name} className='mt-4'>
              <div className="flex items-start">
                <contact.icon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
                <p className="text-base ml-4">{contact.text} {contact.user}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex-auto bg-gray-100 py-10 px-10'>
          <h2 className='text-2xl tracking-tight text-gray-900 mb-4 font-semibold'>Posaljite nam poruku</h2>
          <form action="">
            <div className='lg:flex mb-6'>
              <div className='flex-1 lg:mr-4'>
                <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='firstname'>
                  Ime <span className='text-rose-600'>*</span>
                </label>
                <input
                  required
                  className='shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                  id='firstname'
                  type='text'
                  placeholder='Unesite ime'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='lastname'>
                  Prezime
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                  id='lastname'
                  type='text'
                  placeholder='Unesite prezime'
                />
              </div>
            </div>
            <div className='lg:flex mb-6'>
              <div className='flex-1 lg:mr-4'>
                <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='email'>
                  Email <span className='text-rose-600'>*</span>
                </label>
                <input
                  required
                  className='shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                  id='email'
                  type='text'
                  placeholder='Unesite email'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='phone'>
                  Telefon
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                  id='phone'
                  type='text'
                  placeholder='+381 60 123 456 789'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='subject'>
                Naslov
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                id='subject'
                type='text'
                placeholder='Naslov poruke'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-l font-medium mb-2' htmlFor='message'>
                Poruka
              </label>
              <textarea
                className='h-36 shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-indigo-600 focus:shadow-outline'
                id='message'
                type='text'
                placeholder='Tekst poruke'
              />
            </div>
            <div className='float-right mb-6'>
              <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                Posalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
