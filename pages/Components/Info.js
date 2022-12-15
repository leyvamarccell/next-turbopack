import { motion } from "framer-motion"

export default function Info({image, text, image_2, text_2, image_3, text_3}) {
  
  return (
    <>
 <div className='mt-5 rounded-md h-auto mx-auto md:grid grid-cols-2 gap-10 lg:grid-cols-3 lg:gap-5  w'>
       
        <div className=' '>
        <div className='bg-white  shadow-2xl    rounded-md flex items-center flex-col xl:h-64'>
    <img src={image} alt="" className='h-20 w-20'/>
    <p className='mx-6 mb-5 text-center '>{text}</p>
        </div>
      
        </div>
       
       <div>
       <div  className='bg-white  shadow-2xl    rounded-md flex items-center flex-col xl:h-64'>
    <img src={image_2} alt="" className='h-20 w-20'/>
    <p className='mx-6 mb-5 text-center'>{text_2}</p>
        </div>
       </div>

       <div>
       <div className='bg-white  shadow-2xl    rounded-md flex items-center flex-col xl:h-64'>
    <img src={image_3} alt="" className='h-20 w-20'/>
    <p className='mx-6 mb-5 text-center '>{text_3}</p>
        </div>
       </div>


    </div>
   
    </>
   
  )
}
