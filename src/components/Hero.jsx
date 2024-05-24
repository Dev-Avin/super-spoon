import React from 'react'
import MagneticElement from './MagneticElement'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroheading'>
      Visual Effects & Animation Kit
      </div>
      <div className='heroAnimatedText'>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>P</div>
        <div className='magCont'>
         <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
         >
         <MagneticElement >
        <div className="e1 mag">Text</div>
        </MagneticElement>
         </div>
        </div>
        </div>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>l</div>
        <div className='magCont'>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: "20px"
          }}
         >
        <MagneticElement >
        <div>
        <div className="e2 mag">Mouse</div>
        </div>
        </MagneticElement>
        </div>
        </div>
        </div>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>u</div>
        </div>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>g</div>
        <div className='magCont'>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
         >
        <MagneticElement >
        <div className="e3 mag">Dynamic</div>
        </MagneticElement>
        </div>
        </div>
        </div>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>i</div>
        <div className='magCont'>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
         >
        <MagneticElement >
        <div className="e4 mag">Image</div>
        </MagneticElement>
        </div>
        </div>
        </div>
        <div className='bounce'>
        <div className='heroAnimatedLetter'>n</div>
        <div className='magCont'>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
         >
        <MagneticElement >
        <div className="e5 mag">Background</div>
        </MagneticElement>
        </div>
        </div>

        </div>
    
      </div>
    </div>
  )
}

export default Hero