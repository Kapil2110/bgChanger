import { useState } from 'react'
import img from './assets/kapiltrns1.png'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [color, setColor] = useState('black')


  return (
    <div className='w-full h-screen ' style={{backgroundColor: color}}>
      <div className='rounded-full bg-black  flex flex-wrap justify-center translate-y-full'>
          <h1 className='text-white text-center shadow-white 
          font-serif text-3xl p-3 '>BACKGROUND CHANGER</h1>
      </div>

      <div className = 'fixed flex flex-wrap justify-center inset-x-0 mt-20'>
        <div className=' bg-white py-3 px-5 rounded-xl justify-center  grid-cols-4 gap-5 
        flex flex-wrap w-1/2 mt-10 h-30 md:w-1/3 md:h-1/3 '>
          <div className=''>
          <img src={img} alt="" className='h-20 rounded-full' />

          </div>
          <div>
          <p>Hello, I'M <b>Kapil Sharma.</b></p>
          <span>A<b> React Developer </b></span>

          </div>
          
          
        </div>
      </div>

      <div className='filter bottom-10 fixed flex flex-wrap 
      justify-center inset-x-0'>
      <div className=' bg-gray-600 py-3 px-5 rounded-xl justify-center  grid-cols-4 gap-5 flex flex-wrap'>
        <button type="button" className='bg-red-600 text-white  rounded-xl border-outer-2 
        border-s-black  py-2 px-5 '  onClick={(color) => {
          setColor('red'),
          toast.success('Now Color is Red..!', {theme: ""})       
          }}>Red</button>

        <button type="button" className='bg-blue-600 text-white rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('blue'),
          toast.success('NOw Color is Blue..!', {theme: ""})       
          }}>Blue</button>

        <button type="button" className='bg-green-600 text-white  rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('green'),
          toast.success('Now color is Green..!', {theme: ""})        
          }}>Green</button>

        <button type="button" className='bg-orange-600 text-white  rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('orange'),
          toast.success('Now Color is Orange!', {theme: ""})
        }}>Orange</button>

        <button type="button" className='bg-black text-white  rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('black'),
          toast.success('Now color is Black!', {theme: ""})
        }}>Black</button>

        <button type="button" className='bg-pink-600 text-white  rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('pink'),
          toast.success('Now Color is Pink..!', {theme: ""})       
          }}>Pink</button>

        <button type="button" className='bg-purple-600 text-white  rounded-xl border-outer-2 
        border-s-black py-2 px-5' onClick={(color) => {
          setColor('purple'),
          toast.success('Now Color is Purple..!', {theme: ""})
        }}>Purple</button>

      </div>
      </div>
      <ToastContainer
      theme='dark' />
    </div>
  )
}

export default App
