import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marqee from './components/Marquee'
import DynamicBackground from './components/DynamicBackground'
const App = () => {
  return (
   <>
    <div className='main' >
    <Navbar/>
    <Hero/>
    <Marqee/>
    <DynamicBackground/>
    <div style={{height : "100vh"}} className='dynamicImage'>
          <div className='imageContainer'>
          <img className='img1 visible' src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/eff-2.png"  alt="" />
          <img className='img2 visible' src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/111mask.png"alt="" />
          </div>
          <div className='dynamicImageText'>
            <h4>Image hovers with OpenGL effects</h4>
            <p>Added as a Place holder</p>
          </div>

        </div>
    </div>
   </>

  )
}

export default App