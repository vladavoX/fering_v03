/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MdLocalDining } from 'react-icons/md'
import { BsSuitClubFill } from 'react-icons/bs'
import { Gi3DStairs, GiOfficeChair } from 'react-icons/gi'
import { RiArchiveDrawerLine } from 'react-icons/ri'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import '../styles/Navbar.module.css'

const proizvodi = [
  {
    name: 'Klub Stolovi',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: BsSuitClubFill,
  },
  {
    name: 'Trpezarijski Stolovi',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: MdLocalDining,
  },
  {
    name: 'Industrijski Stolovi',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: GiOfficeChair,
  },
  {
    name: 'Komode',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: RiArchiveDrawerLine,
  },
  {
    name: 'Stepenista',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Gi3DStairs,
  },
  {
    name: 'Ostalo',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: HiOutlineDotsHorizontal,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative bg-gray-800 -mb-[88px] z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Fering</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/assets/logo/fering_logo.png"
                alt="Fering"
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#pocetna" className="text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md">
              Pocetna
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-400' : 'text-gray-400',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none'
                    )}
                  >
                    <span>Proizvodi</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-400'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-20 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {proizvodi.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a href="#" className="text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md">
              Materijali
            </a>
            <a href="#" className="text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md">
              Kontakt
            </a>

            
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-20 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/assets/logo/fering_logo.png"
                    alt="Fering"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {proizvodi.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#pocetna" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pocetna
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Materijali
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
