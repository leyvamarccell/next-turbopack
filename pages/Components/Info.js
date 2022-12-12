export default function Info ({image, text}) {



return(
    <>
    <div className='bg-white rounded-md mx-auto mt-5 shadow-2xl info'>
        <img src={image} alt="" />
        <p>{text}</p>
    </div>
    </>
)
}