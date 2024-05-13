import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-blue w-full px-32 py-10'>
        <div className='flex justify-around'>
            {/* first */}
            <div className='flex flex-col w-1/4'>
                <p className='text-xl'>A decade ago, JDC Foundation, a charitable and nonproﬁt organization journey starting from a small camp established at a densely populated area of Aisha Manzil, Karachi.</p>
                <div className='flex gap-x-8 py-7'>
                  <FaFacebook color='#EF1E60'   size={25}/>
                  <FaInstagram color='#EF1E60'  size={25}/>
                  <FaTwitter color='#EF1E60'  size={25}/>
                  <FaYoutube color='#EF1E60'  size={25}/>
                </div>
            </div>
            <div className='flex gap-x-20'>
              <h3 className='text-center'>Our Campaigns</h3>
            <div className='flex flex-col'>
              <ul>
              <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
              </ul>
            </div>
            <div className='flex flex-col'>
            <ul>
              <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
              </ul>
            </div>
            </div>
            <div className='flex flex-col'>
            <ul>
              <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
                <li>list one</li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer