import Button from "./Button";
import ImageContainer from "./ImageContainer";
import ItemsContainer from "./ItemsContainer";

export default function Container() {
  
  return (
    <>
 <div className='bg-white shadow-2xl mt-5 rounded-md mx-auto w'>
     
        <div className=' md:grid  grid-cols-2'>
        <ImageContainer/>
        <ItemsContainer/>
        </div>
       
       <div >
        <Button/>
       </div>
    </div>
   
    </>
   
  )
}
