import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Image from 'next/image';
function TestimonialCard({ imageUrl, name, comment, address }) {

    function truncateComment(comment, maxLines) {
        const lines = comment.split('\n');
        if (lines.length > maxLines) {
            return lines.slice(0, maxLines).join('\n') + '...';
        }
        return comment;
    }

    const maxLines = 5;
    const truncatedComment = truncateComment(comment, maxLines);

    return (

        <>
            <div className='flex flex-col lg:flex-row w-full m-auto '>
                <div className=' bg-[#3EC1D3] md:ml-7 lg:w-[220px] lg:h-[220px] justify-center align-middle rounded-full relative '
                >
                    <div className='absolute top-2 left-3 w-[70px] h-[70px] rounded-full bg-[#3EC1D3] -z-20  overflow-hidden '>
                    </div>
                    <Image
                        src={imageUrl} alt="my image" width={220} height={220}
                        className='p-2 bg-center object-cover  bg-no-repeat stroke-none overflow-hidden m-auto rounded-full border border-[#3EC1D3]'
                    />
                </div>
                <div className='w-full mt-3 lg:mt-5 lg:w-1/2  m-auto'>
                    <ImQuotesLeft size={24} className='text-[#ccd3e4] mb-2 ' />
                    <p className=' text-justify '>
                        {truncatedComment}
                    </p>
                    <ImQuotesRight size={24} className='text-[#ccd3e4]  absolute right-36 mt-1' />
                    <h3 className='capitalize text-2xl font-black text-[#3EC1D3] mt-8 md:mt-5 mb-1  '>{name}</h3>
                    <p className=' text-lg '> {address} </p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard