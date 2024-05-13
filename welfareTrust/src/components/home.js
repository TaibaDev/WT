
import Image from 'next/image'
import top from '../assets/images/top.jpeg'
const HomeSection = () => {
  return (
    <div>

      <>
        <div className="lg:relative mb-16  flex flex-col items-center lg:flex-row-reverse lg:w-full lg:mt-10 xl:w-full">
          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <Image
              className="lg:h-[600px] h-full w-full lg:mx-auto object-cover rounded-md "
              width={200}
              height={200}
              src={top}
               alt="Winding mountain road"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              data-aos-offset="200"
            // data-aos-mirror="true"
            />
          </div>
          <div className="max-w-full lg:bg-[#e2f2f6] rounded-tr-3xl rounded-br-3xl lg:z-10 lg:right-0 md:shadow-lg lg:absolute lg:top-0 md:mt-20 lg:w-3/5 lg:-left-5  lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12"
            data-aos="fade-right"
          >
            <div className="flex flex-col  p-5 md:p-12 md:px-16 lg:py-16"
            >
              <h2 className="text-2xl text-[#3EC1D3] md:w-[100%] font-semibold capitalize text-green-800 lg:text-4xl ">
                Wellcome to <span className="text-2xl text-[#FF9A00] font-semibold capitalize text-green-800 lg:text-4xl inline " >  Zaheer Welfare</span>

              </h2>
              <p className="text-2xl text-[#EF1E60] font-semibold capitalize text-green-800 lg:text-4xl inline" >Save <span className='typewriter text-[#3FC0D4]'></span> </p>

              <p className="mt-4 pt-3  text-black">
                We provides free monthly assistance, including food and education, to those in need within our community. Our mission is to support you. Additionally, we&apos;ve established a clinic specializing in top-notch treatment for hepatitis patients, ensuring the best care possible for those affected
              </p>
              <div className="mt-8 mx-auto md:mx-0 ">
                <button className="bg-[#3EC1D3] text-white p-3   px-6 rounded-md shadow-md hover:bg-[#FF9A00]  transition ease-in-out delay-150"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

      </>
    </div>
  )
}

export default HomeSection

