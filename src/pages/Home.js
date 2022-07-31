import React from 'react'
import UncontrolledExample from '../components/Carousel'
import Menu from '../components/Menu'

function Home() {
  return (
    <>
    <div className='carousel'>
      <UncontrolledExample />
    </div>
    <div className='menu'>
      <Menu />
    </div>
    </>
  )
}

export default Home