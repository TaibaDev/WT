'use client'
import { Carousel } from "antd";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import TestimonialCard from "./testmonialCard";
import { testimonialData } from "@/utils/testimonialData";

const Testimonial = () => {
    const ref = useRef();
    return (
        <div className="main-div md:px-[8%] mb-10 lg:mt-28 ">
            <div className=" px-6 pt-8 pb-5 relative">
                <h1 className="text-black  text-xl md:text-3xl text-center"  >
                    Our Testimonials
                </h1>
                <p className="text-center md:mt-3 md:mb-3 text-black text-lg">What they Say ?</p>
                <div className=" md:px-10 mx-auto border-black  ">
                    <div className="hidden md:inline">
                        <button className="bg-[#FF165D] p-3  rounded-full absolute left-0 top-[50%] " onClick={() => {
                            ref.current.prev()
                        }}>
                            <AiOutlineLeft size={25} color="white" />
                        </button>
                        <button className="bg-[#FF165D] p-3  rounded-full absolute right-0 top-[50%] " onClick={() => {
                            ref.current.next()
                        }}>
                            <AiOutlineRight size={25} />
                        </button>
                    </div>
                    <Carousel
                        className="md:mb-6 p-10 "
                        dots={false}
                        effect="fade"
                        ref={ref}
                        autoplay={true}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-center"
                    >
                        {
                            testimonialData.map((data, index) => {
                                return <TestimonialCard key={index} imageUrl={data.imageUrl} name={data.name} comment={data.comment} address={data.address} />
                            })
                        }
                    </Carousel>
                    <div className="flex justify-center gap-5 md:hidden">
                        <button className="bg-[#FF165D] p-3  rounded-full " onClick={() => {
                            ref.current.prev()
                        }}>
                            {" "}
                            <AiOutlineLeft size={25} color="white" />
                        </button>
                        <button className="bg-[#FF165D] p-3 rounded-full " onClick={() => {
                            ref.current.next()
                        }}>
                            <AiOutlineRight size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;