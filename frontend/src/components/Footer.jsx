import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex sm:flex-row justify-between mt-40 w-[85%] m-auto mb-10'>
        <div className='flex flex-col sm:grid text-sm items-start' >

        <img src={assets.logo} alt="" className='mb-5 w-32' />
        <p className='w-full md:w-1/3 text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur perferendis distinctio, excepturi officia blanditiis voluptas necessitatibus quis, eveniet, nulla sit quibusdam ea nobis quos atque voluptatem cupiditate illo eligendi.
        </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-800'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Order</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer