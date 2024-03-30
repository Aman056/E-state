
import Property from '@/app/Components/Property'
import '../app/globals.css'
import Header from '@/app/Components/Header'
import Footer from '@/app/Components/Footer'
import AboutUs from '@/app/Components/AboutUs'
import Image from 'next/image'
import img from '../public/images/bg.jpg'
import Sold from '@/app/Components/Sold'
import FormDialog from '@/app/Components/FormDilaog'
import { useState } from 'react'

export default function index() {
  const [open, setOpen] = useState(false)

  // For send mail dialog open
  const handleOpen = () => {
    setOpen(true)
  }
  // For send mail dialog close
  const handleClose = () => {
    setOpen(false)
  }
  const style = {
    textShadow: `1px 3px 7px rgba(0, 0, 0, 1)`
  }

  const bgStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '80vh',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(1px)',
    WebkitFilter: 'blur(2px)',
    zIndex: '-99999',
  };

  return (
    <div>
      <Header />
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 overflow-hidden sm:-top-80" aria-hidden="true" style={bgStyle}>
          <Image
            src={img}
            alt="Image Alt Text"
            layout="fill"
            objectFit="cover"
            className="object-cover filter drop-shadow-md"
          />
        </div>
        <div className="mx-2 py-20 sm:py-48 lg:py-56">
          <div className="text-center relative">
            <div className='' style={{ zIndex: '9999' }}>
              <h1 style={style} className="text-2xl font-bold   text-secondary sm:text-5xl mx-5 ">
                Explore Prestige Properties for Your Dream Home
              </h1>
              <p style={style} className="mt-6 text-lg leading-8 text-light">
                Anim aute id magna aliqua ad ad non deserunt sunt.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <FormDialog handleClose={handleClose} open={open} />
                <button onClick={handleOpen} style={style} className=' bg-secondary focus:bg-light active:bg-primary text-white font-semibold py-4 px-10 rounded shadow-2xl'>Ask For Property</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>

      <Property />
      <hr />
      <Sold />
      <AboutUs />
      <Footer />
    </div>
  )
}
