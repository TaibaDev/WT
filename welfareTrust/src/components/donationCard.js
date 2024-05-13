import React from 'react'
import Image from 'next/image';
import donate from '../assets/images/donate.png'


const DonationCard = () => {
    const backgroundImage = {
        backgroundImage: 'url("../assets/images/download.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <>
            <div className='mt-10 mb-10 lg:mt-28 ' >
                <div className='w-full h-[500px] relative'>
                    <div className='main-div w-full  h-[70%]     rounded-lg border-opacity-50   '
                        style={{ backgroundImage: `url(${require('../assets/images/charityBg.png').default?.src})`, width: '100%', backgroundSize: 'cover', backgroundPosition: 'cover', }}
                    >
                        <div className='flex flex-col-reverse md:flex-row  bg-white md:absolute md:top-[22%] md:right-[10%] lg:right-[20%] md:w-[80%] lg:w-[60%] md:h-[70%]  md:rounded-br-3xl md:rounded-bl-lg overflow-hidden  '
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            data-aos-offset="200"
                        >
                            <div className='w-full  md:w-[50%] bg-[#caf4ff8d]  h-full ' >
                                <h3 className=' text-xl mb-1 mt-5  md:text-4xl font-semibold text-[#FF165D] pl-3'>Fundraising for a Worthy Cause </h3>
                                <p className='text-md  mt-1 text-black pl-3  '> Your generous donation will make a tangible difference in the lives of those in need. Together, we can create positive change and impact communities for the better. </p>
                                <a href="#_" className="relative  md:px-4 py-2 font-medium group w-[150px]  mx-auto md:w-1/2 text-center mt-4 md:ml-4 pl-3 block">
                                    <span className="absolute  inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#FF165D] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF165D] group-hover:bg-[#FF165D]"></span>
                                    <span className="relative text-[#FF165D] group-hover:text-white">Donate</span>
                                </a>
                                <div className='bg-[#ff165cbf] mt-5 p-2 md:p-0 md:h-16 md:w-[50%]  md:absolute md:bottom-0'>
                                    <p className='text-lg md:text-xl mt-2 pl-3' >Raised so far</p>
                                    <p className='text-lg md:text-xl font-semibold text-white  pl-3'> $0 </p>
                                </div>
                            </div>
                            <div className=' w-full md:w-[50%] h-auto '>
                                <Image src={donate} alt='image' className=' h-[250px] md:h-[350px]  w-auto' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[30%] bg-white'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonationCard