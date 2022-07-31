import React, { useEffect } from 'react'

import { ChevronDoubleUpIcon } from '@heroicons/react/outline'

export default function ScrollBack() {
  const [isVisible, setIsVisible] = React.useState(false)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    // reset url
    window.history.pushState('', document.title, window.location.pathname)
  }

  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return (
    // scroll back button
    <div>
      {isVisible && (
        <div className="fixed bottom-0 right-0 mr-6 mb-6">
          <button
            className="bg-gray-800 text-white rounded-full shadow-lg px-4 py-2"
            onClick={scrollToTop}
          >
            <ChevronDoubleUpIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  )
}
