import React from 'react'
import UncontrolledExample from '../components/Carousel'
import Menu from '../components/Menu'
import Location from '../components/Location'
import Instagram from '../components/Instagram'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
    <div className='carousel'>
      <UncontrolledExample />
    </div>
    <div className='menu'>
      <Menu />
    </div>
    <div className='location'>
      <Location />
    </div>
    <div className='instagram'>
      <Instagram />
    </div>
    <div>
      <Contact />
    </div>
    </>
  )
}

export default Home